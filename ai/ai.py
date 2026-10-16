import cv2
from teachable_machine import TeachableMachine

model = TeachableMachine(model_path="keras_model.h5", labels_file_path="labels.txt")

image = cv2.imread("text.png")
result = model.classify_image(image)

print("Результат ИИ:", result["class_name"])
print("Уверенность нейросети:", round(result["highest_score"] * 100, 2), "%")