import { describe, expect, it } from "bun:test";

const { permissionFlags } = await import("../index.js");

describe("minimax permissionFlags", () => {
  it("fullAuto → --yolo (auto-approve all tools)", () => {
    expect(permissionFlags("fullAuto")).toEqual(["--yolo"]);
  });

  it("plan → no flag (default asks)", () => {
    expect(permissionFlags("plan")).toEqual([]);
  });

  it("acceptEdits → no flag", () => {
    expect(permissionFlags("acceptEdits")).toEqual([]);
  });

  it("undefined / unknown → acceptEdits (no --yolo)", () => {
    expect(permissionFlags(undefined)).toEqual([]);
    expect(permissionFlags("bogus" as never)).toEqual([]);
  });
});
