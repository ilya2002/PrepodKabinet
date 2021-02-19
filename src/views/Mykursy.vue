<!--Просто Html разметка показывающий для чего можно ииспользователя страницу при использовании проекта в дальнейшем-->
<template>
  <div>
    <div class="page-title">
      <h3>Мои курсы</h3>
    </div>

    <section>
      <table>
        <thead>
        <tr>
          <th>#</th>
          <th>Заголовок</th>
          <th>Дата</th>
          <th>Категория</th>
          <th>Открыть</th>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td>1</td>
          <td>PHP. Урок 1</td>
          <td>12.12.20</td>
          <td>PHP</td>
          <td>
            <button class="btn-small btn">
              <i class="material-icons">open_in_new</i>
            </button>
          </td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td>2</td>
          <td>PHP. Урок 2</td>
          <td>16.12.20</td>
          <td>PHP</td>
          <td>
            <button class="btn-small btn">
              <i class="material-icons">open_in_new</i>
            </button>
          </td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td>3</td>
          <td>VUE. Урок 1</td>
          <td>20.12.20</td>
          <td>PHP</td>
          <td>
            <button class="btn-small btn">
              <i class="material-icons">open_in_new</i>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
