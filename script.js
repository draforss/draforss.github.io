fetch('http://localhost:5000/logins')
  .then(res => res.json())
  .then(data => {
    let table = `<table>
      <tr>
        <th>No</th>
        <th>Username</th>
        <th>Password</th>
        <th>Waktu</th>
      </tr>`;
    data.forEach((row, i) => {
      table += `<tr>
        <td>${i + 1}</td>
        <td>${row.username || ''}</td>
        <td>${row.password || ''}</td>
        <td>${row.time || ''}</td>
      </tr>`;
    });
    table += `</table>`;
    document.getElementById('table-container').innerHTML = table;
  })
  .catch(err => {
    document.getElementById('table-container').innerHTML = "<p style='color:red'>Gagal memuat data login!</p>";
  });
