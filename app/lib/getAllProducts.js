export default async function getAllProducts() {
  const data = await fetch("http://localhost:4000/product");
  return data.json();
}
