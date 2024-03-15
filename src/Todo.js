import { useState } from "react";

function Todo() {
  // State untuk menyimpan nilai input
  const [aktifitas, setAktifitas] = useState("");
  const [edit, setEdit] = useState(null); // Menyimpan todo yang sedang diedit
  // State untuk menyimpan daftar todos
  const [todos, setTodos] = useState([]);
  const [pesan, setPesan] = useState("");

  // Fungsi untuk menghasilkan ID unik
  function generateId() {
    return Date.now();
  }

  // Fungsi untuk menambahkan todo baru atau menyimpan perubahan pada todo yang sedang diedit
  function saveTodoHandler(event) {
    event.preventDefault();

    if (!aktifitas) {
      return setPesan("Nama aktivitas jangan kosong");
    }

    setPesan("");

    if (edit && edit.id) {
      // Jika sedang dalam mode edit, lakukan update pada todo yang sedang diedit
      const updateTodo = {
        ...edit,
        aktifitas,
      };
      const editTodoIndex = todos.findIndex((todo) => todo.id === edit.id);
      const updateTodos = [...todos];
      updateTodos[editTodoIndex] = updateTodo;
      setTodos(updateTodos);

      cancelEditHandler();
    } else {
      // Jika tidak dalam mode edit, tambahkan todo baru
      setTodos([
        ...todos,
        {
          id: generateId(),
          aktifitas,
          done: false,
        },
      ]);
    }
    setPesan("");
    setAktifitas(""); // Mengosongkan input setelah ditambahkan atau disimpan
    setEdit(null); // Menghapus data edit setelah selesai
  }

  // Fungsi untuk menghapus todo berdasarkan ID
  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    // Mengupdate daftar todos dengan daftar todos yang sudah difilter
    setTodos(filteredTodos);
    //trigger
    if (edit && edit.id === todoId) cancelEditHandler();
  }

  // Fungsi untuk memulai mode edit pada todo
  function editTodoHandler(todo) {
    setAktifitas(todo.aktifitas); // Mengisi input dengan nilai todo yang sedang diedit
    setEdit(todo); // Menyimpan todo yang sedang diedit
  }

  function cancelEditHandler() {
    console.log("cancel edit");
    setEdit(null);
    setAktifitas("");
  }

  function doneTodoHandler(todo) {
    const updateTodo = {
      ...todo,
      done: !todo.done,
    };
    const editTodoIndex = todos.findIndex(
      (currentTodo) => currentTodo.id === todo.id
    );
    const updateTodos = [...todos];
    updateTodos[editTodoIndex] = updateTodo;

    setTodos(updateTodos);
  }

  return (
    <>
      <h1>Simple Todo List</h1>
      {pesan && <div style={{ color: "red" }}>{pesan}</div>}
      {/* Form untuk menambahkan todo baru */}
      <form onSubmit={saveTodoHandler}>
        {/* Input untuk mengetikkan nama aktifitas */}
        <input
          type="text"
          placeholder="Nama aktifitas"
          value={aktifitas}
          // Mengupdate nilai input saat perubahan terjadi
          onChange={(event) => setAktifitas(event.target.value)}
        />
        {/* Tombol untuk menambahkan todo atau menyimpan perubahan */}
        <button type="submit">{edit ? "Simpan Perubahan" : "Tambah"}</button>
        {edit && <button onClick={cancelEditHandler}>Batal Edit</button>}
      </form>
      {todos.length > 0 ? (
        <ul>
          {/* Mapping daftar todos untuk merender setiap todo */}
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                onChange={() => doneTodoHandler(todo)}
                checked={todo.done}
              />
              {/* Menampilkan teks "Belum selesai" atau "Selesai" tergantung pada status ceklis */}
              <span
                style={{ textDecoration: todo.done ? "line-through" : "none" }}
              >
                {todo.aktifitas}
              </span>{" "}
              {todo.done ? "(Selesai)" : "(Belum Selesai)"}
              {/* Tombol untuk mengedit todo */}
              <button onClick={() => editTodoHandler(todo)}>Edit</button>
              {/* Tombol untuk menghapus todo */}
              <button onClick={() => removeTodoHandler(todo.id)}>Hapus</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>Tidak ada todo</i>
        </p>
      )}
    </>
  );
}

export default Todo;
