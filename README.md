# 🛍️ Item Management App

A **Next.js 13+** application built with **TypeScript**, **ShadCN UI**, **React Hook Form**, **Zod**, and **Sonner** for managing items with full CRUD functionality.  
Supports **localStorage persistence**, **toast notifications**, and a **modal with image carousel** for item previews.

---

## 🚀 Features

- ➕ Add new items with details (name, type, description, cover image, gallery images, and price)  
- ✏️ Edit existing items with validation  
- ❌ Delete items with confirmation dialog  
- 📦 Data stored in `localStorage` (persistent between refreshes)  
- 🖼️ Modal with **image carousel** to view product images  
- 💰 Price field with Indian Rupee (₹) support  
- 🔔 Toast notifications for feedback (success/error)  
- 🎨 Modern UI using **ShadCN UI + Tailwind CSS**  
- ⚡ Fully responsive design  

---

## 📂 Project Structure

```bash
src/
├─ app/
│  ├─ layout.tsx          # Root layout (Navbar + Toaster)
│  ├─ page.tsx            # Main page with ItemForm and Item List
│
├─ components/
│  ├─ ui/                 # ShadCN UI components (Button, Input, Dialog, etc.)
│  ├─ ItemFormWithList.tsx # Add/Edit/Delete item functionality
│  ├─ ItemModal.tsx        # Item modal with carousel + enquiry button
│  └─ carousel.tsx         # Image carousel component
│
├─ types/
│  └─ item.ts              # Item type definition
│
├─ styles/
│  └─ globals.css
│
└─ lib/
   └─ utils.ts             # (optional helper functions)

```
## 🛠️ Tech Stack
- ⚡ [Next.js 13+ (App Router)](https://nextjs.org/)  
- 🟦 [TypeScript](https://www.typescriptlang.org/)  
- 📝 [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (form validation)  
- 🎨 [ShadCN UI](https://ui.shadcn.com/) + [Tailwind CSS](https://tailwindcss.com/) (UI + styling)  
- 🔔 [Sonner](https://sonner.emilkowal.ski/) (toast notifications)  
- 🖼️ [Lucide Icons](https://lucide.dev/) (icons)  

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/item-management-app.git
cd item-management-app

```
## ⚙️ Installation & Setup

Install dependencies:

```bash
npm install
```
```bash
mpm run dev
```

## 🖼️ Screenshots

- 📋 Item list with **Edit / Delete actions**  
- 🖼️ Modal with **image carousel**  
- 📝 Add / Edit item form with **Zod validation**  

![image]()
---

## 🔮 Future Enhancements

- 🔗 Connect with **MongoDB + Prisma** instead of `localStorage`  
- 📧 Add enquiry button functionality (Email/WhatsApp integration)  
- 📱 Add swipe gestures for carousel on mobile  

---

## 🤝 Contributing

Contributions are welcome!  
Please **fork** the repo and submit a **pull request** 🙌  

---

## 📜 License

MIT License © 2025 [Your Name]  
