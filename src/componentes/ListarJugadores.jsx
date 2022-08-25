import React from 'react'

export default function ListarJugadores() {
  return (
  
  
    <div class="table-responsive">
    <table class="table"
           id="table"
           data-search="true"
           data-pagination="true"
           data-page-size="3"
           data-page-list="[3, 6, 9]">
        <thead>
        <tr>
            <th data-field="Dato1" data-sortable="true">Dato1</th>
            <th data-field="Dato2" data-sortable="true">Dato2</th>
            <th data-field="Dato3" data-sortable="true">Dato3</th>
            <th data-field="Dato4" data-sortable="true">Dato4</th>
            <th data-field="Dato5" data-sortable="true">Dato5</th>
            <th data-field="Dato6" data-sortable="true">Dato6</th>
            <th data-field="Dato7" data-sortable="true">Dato7</th>
            <th data-field="Dato8" data-sortable="true">Dato8</th>
            <th data-field="Dato9" data-sortable="true">Dato9</th>
            <th data-field="Dato10" data-sortable="true">Dato10</th>
        </tr>
        </thead>
    </table>
</div>

  
  

  )
}
