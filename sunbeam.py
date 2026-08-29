print("Want to find out your nutritiously perfect meal for a day?")
age = int(input("Enter your age: "))
gender = input("Enter gender (male/female): ")
height = float(input("Enter your height in cm: "))
weight = float(input("Enter your weight in kg: "))
print("/nExercise levels")
print("1. heavy")
print("2. light")
print("3. moderate")
print("4. no exercise")
exercise = int(input("Choose between 1 to 4: "))

print("/nGoals levels")
print("1. Loose weight")
print("2. Mintain weight")
print("3. Gain weight")
goal = int(input("Choose between 1 to 3: "))
if gender == "male":
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5
else:
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161

if  exercise == 1:
    calories = bmr * 1.2
elif exercise == 2:
    calories = bmr * 1.375
elif exercise == 3:
    calories = bmr * 1.55
elif exercise == 4:
    calories = bmr * 1.725
else:
    print("Invalid activity level.")
    calories = bmr

if goal == 1:
    calories -= 300
elif goal == 3:
    calories += 300
protein = weight * 1.6
fat = (calories * 0.25) / 9
carbs = (calories - (protein * 4) - (fat * 9)) / 4
water = weight * 0.035
print("\n" + "=" * 35)
print("🌞 YOUR PERFECT DAY")
print("=" * 35)

print(f"Estimated Calories: {calories:.0f} kcal")
print(f"Protein: {protein:.0f} g")
print(f"Carbohydrates: {carbs:.0f} g")
print(f"Fat: {fat:.0f} g")
print(f"Water: {water:.1f} litres")

print("\n✨ Remember: these are estimates, not medical advice.")



