const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Workout = require("../models/workoutModel");

beforeEach(async () => {
  await Workout.deleteMany({});
  let workoutObject = new Workout(initialWorkouts[0]);
  await workoutObject.save();
  workoutObject = new Workout(initialWorkouts[1]);
  await workoutObject.save();
});

afterAll(() => {
  mongoose.connection.close();
});

const initialWorkouts = [
  {
    title: "test workout 1",
    reps: 11,
    load: 101,
  },
  {
    title: "test workout 2",
    reps: 12,
    load: 102,
  },
];

const workoutsInDb = async () => {
  const workouts = await Workout.find({});
  return workouts.map((workout) => workout.toJSON());
};

describe("GET /api/workouts", () => {
  it("should return all workouts", async () => {
    const response = await api.get("/api/workouts");
    expect(response.body).toHaveLength(initialWorkouts.length);
  });

  it("should return workouts as JSON with status 200", async () => {
    await api
      .get("/api/workouts")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  it("should include a specific workout in the returned list", async () => {
    const response = await api.get("/api/workouts");
    const titles = response.body.map((r) => r.title);
    expect(titles).toContain("test workout 2");
  });
});

describe("POST /api/workouts", () => {
  describe("when the payload is valid", () => {
    const newWorkout = { title: "Situps", reps: 25, load: 10 };

    it("should return status 201", async () => {
      await api
        .post("/api/workouts")
        .send(newWorkout)
        .expect(201)
        .expect("Content-Type", /application\/json/);
    });

    it("should persist the new workout in the database", async () => {
      await api.post("/api/workouts").send(newWorkout);

      const workoutsAtEnd = await workoutsInDb();
      expect(workoutsAtEnd).toHaveLength(initialWorkouts.length + 1);
      expect(workoutsAtEnd.map((w) => w.title)).toContain("Situps");
    });
  });

  describe("when the payload is invalid", () => {
    const invalidWorkout = { reps: 23 };

    it("should return status 400 when title is missing", async () => {
      await api.post("/api/workouts").send(invalidWorkout).expect(400);
    });

    it("should not increase the number of workouts in the database", async () => {
      await api.post("/api/workouts").send(invalidWorkout);

      const workoutsAtEnd = await workoutsInDb();
      expect(workoutsAtEnd).toHaveLength(initialWorkouts.length);
    });
  });
});

describe("DELETE /api/workouts/:id", () => {
  describe("when the id is valid", () => {
    it("should return status 204", async () => {
      const [workoutToDelete] = await workoutsInDb();
      await api.delete(`/api/workouts/${workoutToDelete.id}`).expect(204);
    });

    it("should remove the workout from the database", async () => {
      const [workoutToDelete] = await workoutsInDb();
      await api.delete(`/api/workouts/${workoutToDelete.id}`);

      const workoutsAtEnd = await workoutsInDb();
      expect(workoutsAtEnd).toHaveLength(initialWorkouts.length - 1);
      expect(workoutsAtEnd.map((w) => w.title)).not.toContain(workoutToDelete.title);
    });
  });
});

