## ♻️ Recycling Points Challenge

### 📋 Objective
Evaluate users' recycling behavior and assign points based on their efforts. This encourages better recycling practices by offering rewards for environmentally friendly actions.

### ✅ Implementation Steps

#### 1. Add a Field for Recycling Habits
* Introduce a dropdown in the form that allows users to indicate their recycling activity level.

#### 2. Assign Recycling Points
* *Recycle everything* → **+20 points**
* *Recycle some items* → **+10 points**
* *Don't recycle* → **0 points**

#### 3. Include Points in the Total Score
* Combine the recycling score with the user’s total carbon footprint score.

#### 4. Display and Edit Features
* Show the selected recycling habit in the data table.
* Allow users to update their recycling choice when editing their data.

---

## 💻 Example HTML Code

```html
<label>Recycling Habits</label>
<select name="recycling" required>
  <option value="">---Select recycling habits---</option>
  <option value="20">I recycle everything</option>
  <option value="10">I recycle some items</option>
  <option value="0">I don't recycle</option>
</select>
