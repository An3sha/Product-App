import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (formData) => {
    if (!formData.name || !formData.price || !formData.image) {
      return { success: false, message: "All fields are required" };
    }
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        return {
          success: false,
          message: errorData.message || "Failed to create product",
        };
      }

      const responseData = await res.json();
      set((state) => ({ products: [...state.products, responseData.data] }));
      return { success: true, message: responseData.message };
    } catch (error) {
      console.error("Error creating product:", error);
      return { success: false, message: "Failed to create product" };
    }
  },
  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      set({ products: data.data || [] });
    } catch (error) {
      set({ products: [] });
      console.error("Failed to fetch products:", error);
    }
  },
  deleteProduct: async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const errorData = await res.json();
        return {
          success: false,
          message: errorData.message || "Failed to delete product",
        };
      }
      set((state) => ({
        products: state.products.filter((product) => product._id !== id),
      }));
      return { success: true, message: "Product deleted successfully" };
    } catch (error) {
      console.error("Error deleting product:", error);
      return { success: false, message: "Failed to delete product" };
    }
  },
}));

// const {products, setProducts} = useState([]) this is the local state
// const {products, setProducts} = useProductStore() this is the global state
