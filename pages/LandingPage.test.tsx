import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LandingPage from "./LandingPage";

// Mock data for props
const mockFaqs = [
  { id: 1, question: "Test FAQ 1", answer: "Test answer 1" },
  { id: 2, question: "Test FAQ 2", answer: "Test answer 2" },
];

const mockTestimonials = [
  {
    id: 1,
    quote: "Test testimonial",
    author: "Test Author",
    company: "Test Company",
    backgroundImage: "/test-bg.jpg",
  },
];

describe("LandingPage Form", () => {
  beforeEach(() => {
    // Clear any previous renders
    document.body.innerHTML = "";
  });

  it("renders form fields", () => {
    render(<LandingPage faqs={mockFaqs} testimonials={mockTestimonials} />);

    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Telephone")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Company")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("I need help with...")
    ).toBeInTheDocument();
  });

  it("submit button is disabled when form is empty", () => {
    render(<LandingPage faqs={mockFaqs} testimonials={mockTestimonials} />);

    const submitButton = screen.getByText("Submit now");
    expect(submitButton).toBeDisabled();
  });

  it("submit button is enabled when all fields are filled", () => {
    render(<LandingPage faqs={mockFaqs} testimonials={mockTestimonials} />);

    const nameInput = screen.getByPlaceholderText("Name");
    const emailInput = screen.getByPlaceholderText("Email");
    const telephoneInput = screen.getByPlaceholderText("Telephone");
    const companyInput = screen.getByPlaceholderText("Company");
    const messageInput = screen.getByPlaceholderText("I need help with...");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(telephoneInput, { target: { value: "123456789" } });
    fireEvent.change(companyInput, { target: { value: "Test Company" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });

    const submitButton = screen.getByText("Submit now");
    expect(submitButton).not.toBeDisabled();
  });

  it("shows success toast on form submission", () => {
    render(<LandingPage faqs={mockFaqs} testimonials={mockTestimonials} />);

    // Fill form
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Telephone"), {
      target: { value: "123456789" },
    });
    fireEvent.change(screen.getByPlaceholderText("Company"), {
      target: { value: "Test Company" },
    });
    fireEvent.change(screen.getByPlaceholderText("I need help with..."), {
      target: { value: "Test message" },
    });

    // Submit form
    fireEvent.click(screen.getByText("Submit now"));

    expect(
      screen.getByText("Form submitted successfully!")
    ).toBeInTheDocument();
  });

  it("shows warning toast on duplicate submission", () => {
    render(<LandingPage faqs={mockFaqs} testimonials={mockTestimonials} />);

    // Fill and submit form first time
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Telephone"), {
      target: { value: "123456789" },
    });
    fireEvent.change(screen.getByPlaceholderText("Company"), {
      target: { value: "Test Company" },
    });
    fireEvent.change(screen.getByPlaceholderText("I need help with..."), {
      target: { value: "Test message" },
    });

    fireEvent.click(screen.getByText("Submit now"));

    // Fill form again (after it was cleared)
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Telephone"), {
      target: { value: "987654321" },
    });
    fireEvent.change(screen.getByPlaceholderText("Company"), {
      target: { value: "Another Company" },
    });
    fireEvent.change(screen.getByPlaceholderText("I need help with..."), {
      target: { value: "Another message" },
    });

    // Submit second time
    fireEvent.click(screen.getByText("Submit now"));

    expect(screen.getByText("Details already entered!")).toBeInTheDocument();
  });

  it("clears form after successful submission", () => {
    render(<LandingPage faqs={mockFaqs} testimonials={mockTestimonials} />);

    const nameInput = screen.getByPlaceholderText("Name") as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement;
    const telephoneInput = screen.getByPlaceholderText(
      "Telephone"
    ) as HTMLInputElement;
    const companyInput = screen.getByPlaceholderText(
      "Company"
    ) as HTMLInputElement;
    const messageInput = screen.getByPlaceholderText(
      "I need help with..."
    ) as HTMLInputElement;

    // Fill form
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(telephoneInput, { target: { value: "123456789" } });
    fireEvent.change(companyInput, { target: { value: "Test Company" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });

    // Submit form
    fireEvent.click(screen.getByText("Submit now"));

    // Check form is cleared
    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(telephoneInput.value).toBe("");
    expect(companyInput.value).toBe("");
    expect(messageInput.value).toBe("");
  });
});
