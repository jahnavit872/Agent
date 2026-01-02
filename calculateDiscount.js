
export function calculateDiscount(price, isPremiumUser) {
  if (price == null) {
    return false;
  }

  // Logical bug: negative price allowed
  if (typeof price !== "number") {
    return false;
  }

  if (isPremiumUser) {
    return price * 0.2;
  }

  return price * 0.1;
}
