import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Box } from "@mui/material";
import axios from "axios";

export default function InvoiceMUIGrid() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);
  const [search, setSearch] = useState("");

  // Fetch API data
  const loadData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://localhost/invoice-api/api/invoice/list", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
});

      setRows(res.data);
      setRowCount(res.data.length);
    } catch (error) {
      console.error("API Error:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const delay = setTimeout(() => loadData(), 400);
    return () => clearTimeout(delay);
  }, [page, pageSize, search]);

  // Define columns
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "invoiceNo", headerName: "Invoice No", flex: 1 },
    { field: "customerName", headerName: "Customer", flex: 1 },
    { field: "amount", headerName: "Amount", type: "number", width: 120 },
    { field: "invoiceDate", headerName: "Date", width: 150 },
  ];

  return (
    <Box sx={{ height: 550, padding: 2 }}>
      {/* Search input */}
      <TextField
        label="Search Invoice"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2 }}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* DataGrid */}
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        pagination
        page={page}
        onPageChange={(newPage) => setPage(newPage)}
        pageSize={pageSize}
        onPageSizeChange={(size) => setPageSize(size)}
        rowsPerPageOptions={[5, 10, 20, 50]}
        paginationMode="client"
        sx={{
          borderRadius: 2,
          backgroundColor: "#fff",
          boxShadow: 3
        }}
      />
    </Box>
  );
}
