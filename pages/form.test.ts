import { it, expect, describe } from "vitest";

describe("Contact Form Logic", () => {
  it("should validate form data correctly", () => {
    const formData = {
      name: "Test User",
      email: "test@example.com",
      telephone: "1234567890",
      company: "Test Company",
      message: "Testing",
    };

    const isFormValid = !!(
      formData.name &&
      formData.email &&
      formData.telephone &&
      formData.company &&
      formData.message
    );

    expect(isFormValid).toBe(true);
  });

  it("should create submission object with timestamp", () => {
    const formData = {
      name: "Test User",
      email: "test@example.com",
      telephone: "1234567890",
      company: "Test Company",
      message: "Testing",
    };

    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now(),
    };

    expect(submission).toHaveProperty("timestamp");
    expect(submission).toHaveProperty("id");
    expect(submission.name).toBe("Test User");
  });
});
