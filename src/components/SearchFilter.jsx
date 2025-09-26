export default function SearchFilter({ search, setSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full rounded"
      />
    </div>
  );
}
