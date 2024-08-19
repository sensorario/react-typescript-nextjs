import { renderHook } from "@testing-library/react";
import { useEffect, useState } from "react";
import { waitFor } from "@testing-library/react";

const useProductName = () => {
  const [productName, setProductName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isProductRoute, setIsProductRoute] = useState(false);
  const [isValidPath, setIsValidPath] = useState(true);
  const [categoryId, setCategoryId] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductName = async (productId) => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.example.com/products/${productId}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setProductName(data.name);
      } catch (err) {
        /* empty */
      } finally {
        setLoading(false);
      }
    };

    const path = window.location.pathname;
    const matchProductPath = path.match(/\/products\/(\d+)/);
    const matchCategoryProductPath = path.match(/(\d+)\/products\/(\d+)/);
    const productId = matchProductPath ? matchProductPath[1] : null;
    const cat = matchCategoryProductPath ? matchCategoryProductPath[1] : null;

    setCategoryId(cat);
    setIsProductRoute(path.slice(1).split("/").length === 2 && !!productId);
    fetchProductName(productId);
    setIsValidPath(!!productId);
  }, []);

  return { productName, loading, isProductRoute, categoryId, isValidPath };
};

export default useProductName;

global.fetch = jest.fn();

const mockLocation = (pathname) => {
  delete window.location;
  window.location = new URL("https://example.com" + pathname);
};

describe("useProductName", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch and return product name based on product ID in URL", async () => {
    const mockProductId = "42";
    const mockProductName = "Sample Product";
    mockLocation(`/products/${mockProductId}`);
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: mockProductName }),
    });
    const { result } = renderHook(() => useProductName());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.productName).toBe(mockProductName);
    expect(result.current.isProductRoute).toBe(true);
    expect(result.current.isValidPath).toBe(true);
  });

  it("should fetch and return product name based on product ID in URL", async () => {
    const mockProductId = "42";
    const mockProductName = "Sample Product";
    mockLocation(`/products/${mockProductId}`);
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ name: mockProductName }),
    });
    const { result } = renderHook(() => useProductName());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.productName).toBe(null);
    expect(result.current.isProductRoute).toBe(true);
    expect(result.current.isValidPath).toBe(true);
  });

  it("should fetch and return product name based on product ID in URL", async () => {
    const mockProductId = "42";
    const categoryId = "43";
    const mockProductName = "Sample Product";
    mockLocation(`/${categoryId}/products/${mockProductId}`);
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: mockProductName }),
    });
    const { result } = renderHook(() => useProductName());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.productName).toBe(mockProductName);
    expect(result.current.isProductRoute).toBe(false);
    expect(result.current.categoryId).toBe("43");
    expect(result.current.isValidPath).toBe(true);
  });

  it("should fetch and return product name based on product ID in URL", async () => {
    const mockProductName = "Sample Product";
    mockLocation(`/invalid/path`);
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: mockProductName }),
    });
    const { result } = renderHook(() => useProductName());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.productName).toBe(mockProductName);
    expect(result.current.isProductRoute).toBe(false);
    expect(result.current.categoryId).toBe(null);
    expect(result.current.isValidPath).toBe(false);
  });
});
