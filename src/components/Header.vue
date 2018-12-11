<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Stocks</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item" to="/portfolio" activeClass="active" tag="li">
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link class="nav-item" to="/stocks" activeClass="active" tag="li">
            <a class="nav-link">Stocks</a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item" activeClass="active">
            <a class="nav-link"  href="#">End Day</a>
          </li>
          <li class="nav-item dropdown" activeClass="active">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Save & Load</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Save date</a>
              <a class="dropdown-item" href="#">Load date</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
</style>