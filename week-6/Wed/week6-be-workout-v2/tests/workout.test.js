const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;

const workoutsInDb = async () => {
  return await Workout.find({});
};

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});

beforeEach(async () => {
  await Workout.deleteMany({});
  await api
    .post("/api/workouts")
    .set("Authorization", "bearer " + token)
    .send(workouts[0]);
  await api
    .post("/api/workouts")
    .set("Authorization", "bearer " + token)
    .send(workouts[1]);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("POST /api/user/signup", () => {
  it("should return a token on successful signup", async () => {
    const response = await api
      .post("/api/user/signup")
      .send({ email: "newuser@test.fi", password: "R3g5T7#gh" })
      .expect("Content-Type", /application\/json/);

    expect(response.body.token).toBeDefined();
  });
});

describe("GET /api/workouts", () => {
  describe("when the user is authenticated", () => {
    it("should return workouts as JSON with status 200", async () => {
      await api
        .get("/api/workouts")
        .set("Authorization", "bearer " + token)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });

    it("should return all seeded workouts", async () => {
      const response = await api
        .get("/api/workouts")
        .set("Authorization", "bearer " + token);

      expect(response.body).toHaveLength(2);
    });
  });

  describe("when no token is provided", () => {
    it("should return status 401", async () => {
      await api.get("/api/workouts").expect(401);
    });
  });
});

describe("GET /api/workouts/:id", () => {
  it("should return a single workout with status 200", async () => {
    const [workoutToView] = await workoutsInDb();

    const response = await api
      .get(`/api/workouts/${workoutToView._id}`)
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(response.body.title).toBe(workoutToView.title);
  });
});

describe("POST /api/workouts", () => {
  describe("when the payload is valid", () => {
    it("should create a workout and return status 201", async () => {
      const newWorkout = { title: "testworkout", reps: 10, load: 100 };

      await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(newWorkout)
        .expect(201);

      const workoutsAtEnd = await workoutsInDb();
      expect(workoutsAtEnd).toHaveLength(3);
      expect(workoutsAtEnd.map((w) => w.title)).toContain("testworkout");
    });
  });

  describe("when the payload is invalid", () => {
    it("should return status 400 when title is missing", async () => {
      await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send({ reps: 10, load: 100 })
        .expect(400);

      const workoutsAtEnd = await workoutsInDb();
      expect(workoutsAtEnd).toHaveLength(2);
    });
  });
});

describe("PATCH /api/workouts/:id", () => {
  it("should update the workout and return status 200", async () => {
    const [workoutToUpdate] = await workoutsInDb();

    await api
      .patch(`/api/workouts/${workoutToUpdate._id}`)
      .set("Authorization", "bearer " + token)
      .send({ reps: 99 })
      .expect(200);

    const updated = await Workout.findById(workoutToUpdate._id);
    expect(updated.reps).toBe(99);
  });
});

describe("DELETE /api/workouts/:id", () => {
  it("should delete the workout and return status 200", async () => {
    const [workoutToDelete] = await workoutsInDb();

    await api
      .delete(`/api/workouts/${workoutToDelete._id}`)
      .set("Authorization", "bearer " + token)
      .expect(200);

    const workoutsAtEnd = await workoutsInDb();
    expect(workoutsAtEnd).toHaveLength(1);
    expect(workoutsAtEnd.map((w) => w.title)).not.toContain(workoutToDelete.title);
  });
});