#version 420

uniform sampler2D uScene;
uniform sampler2D uBloom;

in vec2 TexCoords;

out vec3 FragColor;

void main() 
{
	vec3 colorA = texture(uScene, TexCoords).rgb;
	vec3 colorB = texture(uBloom, TexCoords).rgb;

	FragColor = 1.0 - (1.0 - colorA) * (1.0 - colorB);

}