/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step-1: get base value of the triangle
 * step-2: added an id in the base input field
 * step-3: getElementById to access the input field
 * step-4: get value from the input field.(value is string now)
 * spep-5: convert the value to a number. use parseFloat
 *
 */

function calculateTriangleArea() {
    // get triangle base value
    const triangleBaseInput = document.getElementById("triangle-base");
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    // get triangle height value
    const triangleHeightInput = document.getElementById("triangle-height");
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);
}