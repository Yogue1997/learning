import { render, screen } from "@testing-library/react";
import Greet from "../components/greet/Greet";

// In this scenario, test() has been replaced by it()

describe("Greet", () => {

  it("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });

});




// describe("Greet", () => {
  
//   test("renders correctly", () => {
//     render(<Greet />);
//     const textElement = screen.getByText("Hello");
//     expect(textElement).toBeInTheDocument();
//   });

//   describe("Nested", () => {
//     test("renders with a name", () => {
//       render(<Greet name="Youssouf" />);
//       const textElement = screen.getByText("Hello Youssouf");
//       expect(textElement).toBeInTheDocument();
//     });
//   });
// });
