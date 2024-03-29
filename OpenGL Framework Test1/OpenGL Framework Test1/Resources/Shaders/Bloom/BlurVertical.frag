#version 420

uniform sampler2D uTex; //Source image
uniform float uPixelSize; //1.0 / Window_Height

out vec3 FragColor;

in vec2 TexCoords;

void main() 
{
	//Sample pixels in a horizontal row
	//Weight should add up to 1
	FragColor = vec3(0.0, 0.0, 0.0);

	FragColor += texture(uTex, vec2(TexCoords.x, TexCoords.y - 4.0 * uPixelSize)).rgb * 0.06;
	FragColor += texture(uTex, vec2(TexCoords.x, TexCoords.y - 3.0 * uPixelSize)).rgb * 0.09;
	FragColor += texture(uTex, vec2(TexCoords.x, TexCoords.y - 2.0 * uPixelSize)).rgb * 0.12;
	FragColor += texture(uTex, vec2(TexCoords.x, TexCoords.y - 		 uPixelSize)).rgb * 0.15;
	FragColor += texture(uTex, vec2(TexCoords.x, TexCoords.y				   )).rgb * 0.16;
	FragColor += texture(uTex, vec2(TexCoords.x, TexCoords.y +		 uPixelSize)).rgb * 0.15;
	FragColor += texture(uTex, vec2(TexCoords.x, TexCoords.y + 2.0 * uPixelSize)).rgb * 0.12;
	FragColor += texture(uTex, vec2(TexCoords.x, TexCoords.y + 3.0 * uPixelSize)).rgb * 0.09;
	FragColor += texture(uTex, vec2(TexCoords.x, TexCoords.y + 4.0 * uPixelSize)).rgb * 0.06;
}