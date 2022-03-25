<!-- Navbar -->
<nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div class="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li class=" text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
            <li class="breadcrumb-item text-sm text-dark active" aria-current="page">
            @php
            $_SERVER['REQUEST_URI'][1] = strtoupper($_SERVER['REQUEST_URI'][1]);
            echo $_SERVER['REQUEST_URI'];
            @endphp
            </li>
          </ol>
          <h6 class="font-weight-bolder mb-0">
            @php
            $_SERVER['REQUEST_URI'] = substr($_SERVER['REQUEST_URI'], 1);
            echo $_SERVER['REQUEST_URI'];
            @endphp
          </h6>
        </nav>
        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 justify-content-end" id="navbar">
          <ul class="navbar-nav  justify-content-end">
            <li class="nav-item d-flex align-items-center justify-content-end">
                <p class="nav-link">
                  Admin
                </p>
                <p class="nav-link">
                  <a class="nav-link" href="http://localhost:3000/">
                    Home Page
                  </a>
                </p>
              
            </li>

          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->