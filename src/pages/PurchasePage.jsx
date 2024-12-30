import React from "react";

function PurchasePage() {
  return (
    <div>
      <h1>רכישת רכב</h1>
      <p>נא להזין את פרטי התשלום שלך להשלמת הרכישה:</p>
      <form>
        <label>
          שם מלא:
          <input type="text" name="fullName" required />
        </label>
        <br />
        <label>
          מספר כרטיס אשראי:
          <input type="text" name="creditCard" required maxLength="16" />
        </label>
        <br />
        <label>
          תוקף (MM/YY):
          <input type="text" name="expiryDate" required maxLength="5" />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" name="cvv" required maxLength="3" />
        </label>
        <br />
        <button type="submit">שלם עכשיו</button>
      </form>
    </div>
  );
}

<button disabled style={{ cursor: "not-allowed" }}>
  שלם עכשיו
</button>;

export default PurchasePage;
