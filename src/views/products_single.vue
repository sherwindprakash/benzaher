<template>
  <div class="NewsSingle">
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>

    <section v-else style="background-color: white; color: black">
      <div v-if="loading">
        <div class="loading loading-lg"></div>
      </div>

      <div v-else>
        <div class="ProdSingle">
          <div class="columns">
            <div class="column col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <img
                class="HolderImage"
                :title="info.brand"
                :src="'https://binzaher.com' + info.product_image.path"
              />
            </div>
            <div class="column col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <h1 style="font-weight: 800">{{ info.product_name }}</h1>

              <table class="table">
                <tbody>
                  <tr>
                    <td><b>Product Type</b></td>
                    <td>{{ info.brand }}</td>
                  </tr>
                  <tr>
                    <td><b>Product Code</b></td>
                    <td>{{ info.product_code }}</td>
                  </tr>
                  
                  <tr>
                    <td><b>Vehicle Type</b></td>
                    <td>{{ info.vehicle_type }}</td>
                  </tr>
                </tbody>
              </table>

              <div class="ContHolder">
                <small>Description</small>
                <div
                  style="margin-top: 15px"
                  v-html="info.product_description"
                ></div>


                <b>Product Size</b>

<table>
                <tbody>
               
                  <tr>
                    <td>
                      <div
                        v-if="info.size === '1L'"
                        style="
                          display: flex;
                          flex-direction: row;
                          flex-wrap: nowrap;
                          justify-content: center;
                        "
                      >
                        <div class="HolderX">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            style="enable-background: new 0 0 100 100"
                            xml:space="preserve"
                          >
                            <path
                              d="M66,16.2c-3.9-0.4-6.1-1.1-8.4-1.8c-2.8-0.9-5.8-1.7-11.7-2.2V9.6h0c0-0.1,0-0.1,0-0.2c0-4.5-13.6-4.5-13.6,0
	c0,0.1,0,0.2,0.1,0.4v2.6c-2,0.7-3,2-3.5,3.5l0,0l0,0c-0.7,1.9-0.6,4.2-0.5,6c0.1,1.3,0.1,2.6,0,3.5c-0.6,3.2-7.5,18.8-10.1,24.6
	l-0.1,25.6c0,6.9,5,18.4,10.2,18.4h1.5h12.8h25.2c1,0,2-0.1,2.9-0.4l0,0l0,0c8.4-2.4,11.2-15.3,11.2-19V37.8
	C81.9,18.8,66.2,16.2,66,16.2z M46.2,14.8l-0.3,0v0C46,14.8,46.1,14.8,46.2,14.8z M39.1,7.9c0.2,0,0.3,0,0.5,0
	c2,0.1,3.4,0.7,4.1,1.3c-0.8,0.6-2.4,1.3-4.6,1.3c-2.2,0-3.8-0.7-4.6-1.3C35.4,8.6,37,7.9,39.1,7.9z"
                            />
                          </svg>
                          <div style="position: absolute; color: white">1L</div>
                        </div>
                        <div class="HolderX">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            style="enable-background: new 0 0 100 100"
                            xml:space="preserve"
                          >
                            <g>
                              <path
                                d="M66,16.2c-3.9-0.4-6.1-1.1-8.4-1.8c-2.8-0.9-5.8-1.7-11.7-2.2V9.6h0c0-0.1,0-0.1,0-0.2c0-4.5-13.6-4.5-13.6,0
		c0,0.1,0,0.2,0.1,0.4v2.6c-4.4,1.5-4.2,6.3-4,9.6c0.1,1.3,0.1,2.6,0,3.5c-0.6,3.2-7.5,18.8-10.1,24.6l-0.1,25.6
		c0,6.9,5,18.4,10.2,18.4h39.5c10.6,0,14.1-15.3,14.1-19.4V37.8C81.9,18.8,66.2,16.2,66,16.2z M39.1,7.9c0.2,0,0.3,0,0.5,0
		c2,0.1,3.4,0.7,4.1,1.3c-0.8,0.6-2.4,1.3-4.6,1.3c-2.2,0-3.8-0.7-4.6-1.3C35.4,8.6,37,7.9,39.1,7.9z M79.3,74.7
		c0,4-3.5,16.8-11.5,16.8H28.3c-2.8,0-7.6-9-7.6-15.8V50.8c1.1-2.5,9.3-20.9,10.1-24.9c0.2-1.2,0.2-2.7,0.1-4.2
		c-0.2-3.5-0.1-5.6,1.4-6.6c0.2,2.1,3.5,3,6.8,3c3.3,0,6.5-0.9,6.8-3h0v-0.4c5.5,0.5,8.3,1.3,11,2.1c2.3,0.7,4.8,1.4,8.8,1.9
		c0.6,0.1,13.6,2.2,13.6,19L79.3,74.7L79.3,74.7L79.3,74.7z"
                              />
                            </g>
                          </svg>
                          <div style="position: absolute; color: black">4L</div>
                        </div>
                        <div class="HolderX">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            style="enable-background: new 0 0 100 100"
                            xml:space="preserve"
                          >
                            <g>
                              <path
                                d="M66,16.2c-3.9-0.4-6.1-1.1-8.4-1.8c-2.8-0.9-5.8-1.7-11.7-2.2V9.6h0c0-0.1,0-0.1,0-0.2c0-4.5-13.6-4.5-13.6,0
		c0,0.1,0,0.2,0.1,0.4v2.6c-4.4,1.5-4.2,6.3-4,9.6c0.1,1.3,0.1,2.6,0,3.5c-0.6,3.2-7.5,18.8-10.1,24.6l-0.1,25.6
		c0,6.9,5,18.4,10.2,18.4h39.5c10.6,0,14.1-15.3,14.1-19.4V37.8C81.9,18.8,66.2,16.2,66,16.2z M39.1,7.9c0.2,0,0.3,0,0.5,0
		c2,0.1,3.4,0.7,4.1,1.3c-0.8,0.6-2.4,1.3-4.6,1.3c-2.2,0-3.8-0.7-4.6-1.3C35.4,8.6,37,7.9,39.1,7.9z M79.3,74.7
		c0,4-3.5,16.8-11.5,16.8H28.3c-2.8,0-7.6-9-7.6-15.8V50.8c1.1-2.5,9.3-20.9,10.1-24.9c0.2-1.2,0.2-2.7,0.1-4.2
		c-0.2-3.5-0.1-5.6,1.4-6.6c0.2,2.1,3.5,3,6.8,3c3.3,0,6.5-0.9,6.8-3h0v-0.4c5.5,0.5,8.3,1.3,11,2.1c2.3,0.7,4.8,1.4,8.8,1.9
		c0.6,0.1,13.6,2.2,13.6,19L79.3,74.7L79.3,74.7L79.3,74.7z"
                              />
                            </g>
                          </svg>
                          <div style="position: absolute; color: black">5L</div>
                        </div>
                      </div>

                      <div
                        v-if="info.size === '4L'"
                        style="
                          display: flex;
                          flex-direction: row;
                          flex-wrap: nowrap;
                          justify-content: center;
                        "
                      >
                        <div class="HolderX">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            style="enable-background: new 0 0 100 100"
                            xml:space="preserve"
                          >
                            <path
                              d="M66,16.2c-3.9-0.4-6.1-1.1-8.4-1.8c-2.8-0.9-5.8-1.7-11.7-2.2V9.6h0c0-0.1,0-0.1,0-0.2c0-4.5-13.6-4.5-13.6,0
	c0,0.1,0,0.2,0.1,0.4v2.6c-2,0.7-3,2-3.5,3.5l0,0l0,0c-0.7,1.9-0.6,4.2-0.5,6c0.1,1.3,0.1,2.6,0,3.5c-0.6,3.2-7.5,18.8-10.1,24.6
	l-0.1,25.6c0,6.9,5,18.4,10.2,18.4h1.5h12.8h25.2c1,0,2-0.1,2.9-0.4l0,0l0,0c8.4-2.4,11.2-15.3,11.2-19V37.8
	C81.9,18.8,66.2,16.2,66,16.2z M46.2,14.8l-0.3,0v0C46,14.8,46.1,14.8,46.2,14.8z M39.1,7.9c0.2,0,0.3,0,0.5,0
	c2,0.1,3.4,0.7,4.1,1.3c-0.8,0.6-2.4,1.3-4.6,1.3c-2.2,0-3.8-0.7-4.6-1.3C35.4,8.6,37,7.9,39.1,7.9z"
                            />
                          </svg>
                          <div style="position: absolute; color: white">4L</div>
                        </div>
                        <div class="HolderX">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            style="enable-background: new 0 0 100 100"
                            xml:space="preserve"
                          >
                            <g>
                              <path
                                d="M66,16.2c-3.9-0.4-6.1-1.1-8.4-1.8c-2.8-0.9-5.8-1.7-11.7-2.2V9.6h0c0-0.1,0-0.1,0-0.2c0-4.5-13.6-4.5-13.6,0
		c0,0.1,0,0.2,0.1,0.4v2.6c-4.4,1.5-4.2,6.3-4,9.6c0.1,1.3,0.1,2.6,0,3.5c-0.6,3.2-7.5,18.8-10.1,24.6l-0.1,25.6
		c0,6.9,5,18.4,10.2,18.4h39.5c10.6,0,14.1-15.3,14.1-19.4V37.8C81.9,18.8,66.2,16.2,66,16.2z M39.1,7.9c0.2,0,0.3,0,0.5,0
		c2,0.1,3.4,0.7,4.1,1.3c-0.8,0.6-2.4,1.3-4.6,1.3c-2.2,0-3.8-0.7-4.6-1.3C35.4,8.6,37,7.9,39.1,7.9z M79.3,74.7
		c0,4-3.5,16.8-11.5,16.8H28.3c-2.8,0-7.6-9-7.6-15.8V50.8c1.1-2.5,9.3-20.9,10.1-24.9c0.2-1.2,0.2-2.7,0.1-4.2
		c-0.2-3.5-0.1-5.6,1.4-6.6c0.2,2.1,3.5,3,6.8,3c3.3,0,6.5-0.9,6.8-3h0v-0.4c5.5,0.5,8.3,1.3,11,2.1c2.3,0.7,4.8,1.4,8.8,1.9
		c0.6,0.1,13.6,2.2,13.6,19L79.3,74.7L79.3,74.7L79.3,74.7z"
                              />
                            </g>
                          </svg>
                          <div style="position: absolute; color: black">1L</div>
                        </div>
                        <div class="HolderX">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            style="enable-background: new 0 0 100 100"
                            xml:space="preserve"
                          >
                            <g>
                              <path
                                d="M66,16.2c-3.9-0.4-6.1-1.1-8.4-1.8c-2.8-0.9-5.8-1.7-11.7-2.2V9.6h0c0-0.1,0-0.1,0-0.2c0-4.5-13.6-4.5-13.6,0
		c0,0.1,0,0.2,0.1,0.4v2.6c-4.4,1.5-4.2,6.3-4,9.6c0.1,1.3,0.1,2.6,0,3.5c-0.6,3.2-7.5,18.8-10.1,24.6l-0.1,25.6
		c0,6.9,5,18.4,10.2,18.4h39.5c10.6,0,14.1-15.3,14.1-19.4V37.8C81.9,18.8,66.2,16.2,66,16.2z M39.1,7.9c0.2,0,0.3,0,0.5,0
		c2,0.1,3.4,0.7,4.1,1.3c-0.8,0.6-2.4,1.3-4.6,1.3c-2.2,0-3.8-0.7-4.6-1.3C35.4,8.6,37,7.9,39.1,7.9z M79.3,74.7
		c0,4-3.5,16.8-11.5,16.8H28.3c-2.8,0-7.6-9-7.6-15.8V50.8c1.1-2.5,9.3-20.9,10.1-24.9c0.2-1.2,0.2-2.7,0.1-4.2
		c-0.2-3.5-0.1-5.6,1.4-6.6c0.2,2.1,3.5,3,6.8,3c3.3,0,6.5-0.9,6.8-3h0v-0.4c5.5,0.5,8.3,1.3,11,2.1c2.3,0.7,4.8,1.4,8.8,1.9
		c0.6,0.1,13.6,2.2,13.6,19L79.3,74.7L79.3,74.7L79.3,74.7z"
                              />
                            </g>
                          </svg>
                          <div style="position: absolute; color: black">5L</div>
                        </div>
                      </div>

                      <div
                        v-if="info.size === '5L'"
                        style="
                          display: flex;
                          flex-direction: row;
                          flex-wrap: nowrap;
                          justify-content: center;
                        "
                      >
                        <div class="HolderX">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            style="enable-background: new 0 0 100 100"
                            xml:space="preserve"
                          >
                            <path
                              d="M66,16.2c-3.9-0.4-6.1-1.1-8.4-1.8c-2.8-0.9-5.8-1.7-11.7-2.2V9.6h0c0-0.1,0-0.1,0-0.2c0-4.5-13.6-4.5-13.6,0
	c0,0.1,0,0.2,0.1,0.4v2.6c-2,0.7-3,2-3.5,3.5l0,0l0,0c-0.7,1.9-0.6,4.2-0.5,6c0.1,1.3,0.1,2.6,0,3.5c-0.6,3.2-7.5,18.8-10.1,24.6
	l-0.1,25.6c0,6.9,5,18.4,10.2,18.4h1.5h12.8h25.2c1,0,2-0.1,2.9-0.4l0,0l0,0c8.4-2.4,11.2-15.3,11.2-19V37.8
	C81.9,18.8,66.2,16.2,66,16.2z M46.2,14.8l-0.3,0v0C46,14.8,46.1,14.8,46.2,14.8z M39.1,7.9c0.2,0,0.3,0,0.5,0
	c2,0.1,3.4,0.7,4.1,1.3c-0.8,0.6-2.4,1.3-4.6,1.3c-2.2,0-3.8-0.7-4.6-1.3C35.4,8.6,37,7.9,39.1,7.9z"
                            />
                          </svg>
                          <div style="position: absolute; color: white">5L</div>
                        </div>
                        <div class="HolderX">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            style="enable-background: new 0 0 100 100"
                            xml:space="preserve"
                          >
                            <g>
                              <path
                                d="M66,16.2c-3.9-0.4-6.1-1.1-8.4-1.8c-2.8-0.9-5.8-1.7-11.7-2.2V9.6h0c0-0.1,0-0.1,0-0.2c0-4.5-13.6-4.5-13.6,0
		c0,0.1,0,0.2,0.1,0.4v2.6c-4.4,1.5-4.2,6.3-4,9.6c0.1,1.3,0.1,2.6,0,3.5c-0.6,3.2-7.5,18.8-10.1,24.6l-0.1,25.6
		c0,6.9,5,18.4,10.2,18.4h39.5c10.6,0,14.1-15.3,14.1-19.4V37.8C81.9,18.8,66.2,16.2,66,16.2z M39.1,7.9c0.2,0,0.3,0,0.5,0
		c2,0.1,3.4,0.7,4.1,1.3c-0.8,0.6-2.4,1.3-4.6,1.3c-2.2,0-3.8-0.7-4.6-1.3C35.4,8.6,37,7.9,39.1,7.9z M79.3,74.7
		c0,4-3.5,16.8-11.5,16.8H28.3c-2.8,0-7.6-9-7.6-15.8V50.8c1.1-2.5,9.3-20.9,10.1-24.9c0.2-1.2,0.2-2.7,0.1-4.2
		c-0.2-3.5-0.1-5.6,1.4-6.6c0.2,2.1,3.5,3,6.8,3c3.3,0,6.5-0.9,6.8-3h0v-0.4c5.5,0.5,8.3,1.3,11,2.1c2.3,0.7,4.8,1.4,8.8,1.9
		c0.6,0.1,13.6,2.2,13.6,19L79.3,74.7L79.3,74.7L79.3,74.7z"
                              />
                            </g>
                          </svg>
                          <div style="position: absolute; color: black">1L</div>
                        </div>
                        <div class="HolderX">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            style="enable-background: new 0 0 100 100"
                            xml:space="preserve"
                          >
                            <g>
                              <path
                                d="M66,16.2c-3.9-0.4-6.1-1.1-8.4-1.8c-2.8-0.9-5.8-1.7-11.7-2.2V9.6h0c0-0.1,0-0.1,0-0.2c0-4.5-13.6-4.5-13.6,0
		c0,0.1,0,0.2,0.1,0.4v2.6c-4.4,1.5-4.2,6.3-4,9.6c0.1,1.3,0.1,2.6,0,3.5c-0.6,3.2-7.5,18.8-10.1,24.6l-0.1,25.6
		c0,6.9,5,18.4,10.2,18.4h39.5c10.6,0,14.1-15.3,14.1-19.4V37.8C81.9,18.8,66.2,16.2,66,16.2z M39.1,7.9c0.2,0,0.3,0,0.5,0
		c2,0.1,3.4,0.7,4.1,1.3c-0.8,0.6-2.4,1.3-4.6,1.3c-2.2,0-3.8-0.7-4.6-1.3C35.4,8.6,37,7.9,39.1,7.9z M79.3,74.7
		c0,4-3.5,16.8-11.5,16.8H28.3c-2.8,0-7.6-9-7.6-15.8V50.8c1.1-2.5,9.3-20.9,10.1-24.9c0.2-1.2,0.2-2.7,0.1-4.2
		c-0.2-3.5-0.1-5.6,1.4-6.6c0.2,2.1,3.5,3,6.8,3c3.3,0,6.5-0.9,6.8-3h0v-0.4c5.5,0.5,8.3,1.3,11,2.1c2.3,0.7,4.8,1.4,8.8,1.9
		c0.6,0.1,13.6,2.2,13.6,19L79.3,74.7L79.3,74.7L79.3,74.7z"
                              />
                            </g>
                          </svg>
                          <div style="position: absolute; color: black">4L</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                 
                </tbody>
              </table>



<div class="columns">
    <div class="column col-6">
      <b>Quantity</b>
      <!-- form select control -->
<div class="form-group">
  <select class="form-select">
    <option>Choose an option</option>
    <option>Slack</option>
    <option>Skype</option>
    <option>Hipchat</option>
  </select>
</div>
    </div>
    <div class="column col-6">
      <div class="PriceHolder">
                   <h5 style="text-align: right;
    font-weight: 800;
    font-size: 30px;">{{info.price }}</h5><h6 style="margin-left: 5px;">  OMR</h6>
                </div>

    </div>

        <div class="column col-12">Add to Cart</div>

    
  </div>



                

               
               
              </div>

               <div
          class="columns"
          style="color: #383636; text-align: right; margin-top: 40px"
        >
          <div class="column col-12">
            <router-link style="color: black;" to="/products-&-services/products/" class="Back" title="Back">
              <span class="pic arrow-left"></span>
              Back
            </router-link>
          </div>
        </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },

  components: {},
 

  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/entry/products/" +
          this.$route.params.productsid +
          "?token=b8766574e1a92b4e6296441248669c"
      )
      .then((response) => {
        this.info = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style scoped>
.pic {
  margin: 5px;
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
}
.arrow-left {
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 15px solid #383636;
}
.PriceHolder {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
}
img.HolderImage {
  width: 100%;
  height: auto;
}
.ProdSingle {
  max-width: 1280px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 100px;
  color: black;
}
svg#Capa_1 {
  width: 90px;
  height: auto;
  display: inline-block;
}
.HolderX {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}
.ContHolder {
  padding: 10px;
}
</style>>
