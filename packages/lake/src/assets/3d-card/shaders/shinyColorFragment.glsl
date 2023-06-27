float red = cameraPosition.x * cameraPosition.z;
float green = cameraPosition.y * cameraPosition.z;
float blue = 0.1;

red = sin(red / 5.0) + 1.0 / 2.0;
green = sin(green / 5.0) + 1.0 / 2.0;

vec3 shinyColor = vec3(red, green, blue);
float shinyFactor = 0.35;

diffuseColor.rgb = mix(diffuseColor.rgb, shinyColor, shinyFactor);
