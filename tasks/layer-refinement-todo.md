# Layer Refinement — Post-Completion

> Sau khi hoàn thành tất cả layers (Layer 0 → N), user check lại và báo bug hoặc feature mới.
> File này track những thay đổi sau khi hệ thống đã "xong".

---

## Workflow

1. **User báo** → Bug hoặc feature mới
2. **AI brainstorm** → Clarify + propose 2-3 approaches
3. **User approve** → Confirm phương án
4. **Tạo task** → Thêm vào bảng bên dưới
5. **Pick + implement** → Như các layer khác

---

## Tasks

### [R-003] — Add Cart and Wishlist Buttons to Product Cards

**Type:** Feature
**Description:** Product cards lacked "Add to Cart" and "Add to Wishlist" buttons, making these features difficult to access.
**Acceptance Criteria:**
- Modify `ProductCard.tsx` to include functional buttons for adding items to cart and wishlist.
- Use `useCart` and `useWishlist` hooks.
- Ensure buttons are styled appropriately.
**Status:** ✅ Done
**Commit:** Add Add-to-Cart and Add-to-Wishlist buttons to ProductCard component.

### [R-001] — Fix Auth Header Display

**Type:** Bug
**Description:** After logging in, the header still displays the "Login" button. It should display a "Logout" or profile link instead.
**Acceptance Criteria:**
- Create `hooks/useAuth.ts` to manage auth state.
- Update `Navbar.tsx` to conditionally render Login/Logout based on auth state.
**Status:** ✅ Done
**Commit:** Added `useAuth` hook and updated `Navbar` to conditionally render Login/Logout.

