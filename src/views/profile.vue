<template>
<div class="PageHolder" v-if="User">
    <div class="RegisterHolder">
        <div class="CHolder">
            <h5 v-if="User" style="
            font-size: 30px;
            font-style: italic;
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 20px;
            color: rgb(33 33 33);
          ">
                Welcome, {{ User.FullName }}
            </h5>

            <div class="columns Holding">
                <div class="column col-8 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <form class="form-horizontal" id="signup-form" @submit.prevent="processFormProfile">
                        <div class="form-group" style="text-align: center; display: block">
                            <div class="col-12 text-center" style="margin-top: 20px; position: relative">
                                <figure class="avatar avatar-xl">
                                    <img v-if="ProfilePic" :src="
                        'https://binzaher.com/api/storage/uploads' +
                        ProfilePic.path
                      " alt="..." />
                                    <img v-else src="../assets/64x64.png" alt="..." />
                                </figure>
                            </div>
                            <div class="HolderBttn">
                                <input aria-label="Attach CV" placeholder="Attach CV" type="file" id="file" ref="file" v-on:change="handleFileUpload()" required />
                                <button class="ProilePicSend" type="submit">
                                    Update Profile Image
                                </button>
                            </div>
                        </div>
                    </form>

                    <form class="form-horizontal" id="signup-form" @submit.prevent="processForm">
                        <div class="form-group" v-if="User">
                            <div class="col-3 col-sm-12">
                                <label class="form-label" for="FullName">Full Name</label>
                            </div>
                            <div class="col-9 col-sm-12">
                                <input id="FullName" v-model="User.FullName" class="form-input" type="text" placeholder="Full Name" required />
                            </div>
                        </div>

                        <fieldset disabled>
                            <div class="form-group" v-if="User">
                                <div class="col-3 col-sm-12">
                                    <label class="form-label" for="Email">Email</label>
                                </div>
                                <div class="col-9 col-sm-12">
                                    <input id="Email" v-model="User.email" class="form-input" type="email" placeholder="Email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$" />
                                </div>
                            </div>
                        </fieldset>

                        <div class="form-group" v-if="User">
                            <div class="col-3 col-sm-12">
                                <label class="form-label" for="FullName">Contact Number</label>
                            </div>
                            <div class="col-9 col-sm-12">
                                <input id="ContactNumber" v-model="User.Mobile" class="form-input" type="number" placeholder="Contact Number" required />
                            </div>
                        </div>

                        <div class="form-group" v-if="User">
                            <div class="col-3 col-sm-12">
                                <label class="form-label" for="Password">Change Password</label>
                            </div>
                            <div class="col-9 col-sm-12">
                                <input id="Password" v-model="Password" class="form-input" type="password" placeholder="Password" autocomplete="off" />
                            </div>
                        </div>

                        <div class="text-right">
                            <button class="BtnSend" type="submit">Edit Profile</button>
                        </div>
                    </form>

                    <h5 style="
                font-size: 30px;
                font-style: italic;
                font-weight: bold;
                text-transform: uppercase;
                margin-top: 20px;
                color: rgb(199 40 67);
              ">
                        My Vehicals
                    </h5>

                    <div class="column text-right" style="padding-bottom: 30px">
                        <a class="BtnSend" href="#add_vehical">Add Vehical</a>
                        <div class="modal" id="add_vehical">
                            <a class="modal-overlay" href="#modals" aria-label="Close"></a>
                            <div class="modal-container" role="document">
                                <div class="modal-header">
                                    <a class="btn btn-clear float-right" href="#modals" aria-label="Close"></a>
                                </div>
                                <div class="modal-body text-left">
                                    <div class="content">
                                        <form class="form-horizontal" id="signup-form" @submit.prevent="processFormVehical">
                                            <div class="form-group">
                                                <div class="col-4 col-sm-12">
                                                    <label class="form-label" for="Make">Select Type</label>
                                                </div>
                                                <div class="col-8 col-sm-12">
                                                    <select v-model="Type" class="form-select" required>
                                                        <option>Choose an option</option>

                                                        <option>Car</option>
                                                        <option>Motocycle</option>
                                                        <option>Boat</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="col-4 col-sm-12">
                                                    <label class="form-label" for="Make">Make</label>
                                                </div>
                                                <div class="col-8 col-sm-12">
                                                    <!-- Make -->
                                                    <!-- form select control -->
                                                    <div class="form-group">
                                                        <select id="Make" class="form-select" v-model="Make" placeholder="Make" required>
                                                            <option>Choose an option</option>

                                                            <option>Audi</option>
                                                            <option>BMW</option>
                                                            <option>Cadillac</option>
                                                            <option>Chevrolet</option>
                                                            <option>Chrysler</option>
                                                            <option>Dodge</option>
                                                            <option>Fiat</option>
                                                            <option>Ford</option>
                                                            <option>Geely</option>
                                                            <option>GMC</option>
                                                            <option>Hyundai </option>
                                                            <option>Honda</option>
                                                            <option>Infiniti</option>
                                                            <option>Isuzu</option>
                                                            <option>Jaguar </option>
                                                            <option>Jeep</option>
                                                            <option>Kia</option>
                                                            <option>Land Rover</option>
                                                            <option>Lexus</option>
                                                            <option>Lincoln </option>
                                                            <option>Maserati</option>
                                                            <option>Mazda</option>
                                                            <option>Mercedes Benz</option>
                                                            <option>MG</option>
                                                            <option>Mini </option>
                                                            <option>Mitsubishi </option>
                                                            <option>Nissan</option>
                                                            <option>Peugeot </option>
                                                            <option>Porsche </option>
                                                            <option>Subaru</option>
                                                            <option>Suzuki </option>
                                                            <option>Toyota</option>
                                                            <option>Volvo</option>
                                                            <option>Volkswagen</option>

                                                        </select>
                                                    </div>
                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Audi'">
                                                        <label class="form-label" for="Make">Audi Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>A1</option>
                                                            <option>A3</option>
                                                            <option>A4</option>
                                                            <option>A6</option>
                                                            <option>A7</option>
                                                            <option>A8</option>
                                                            <option>S3</option>
                                                            <option>RS3</option>
                                                            <option>Q3</option>
                                                            <option>Q5</option>
                                                            <option>Q7</option>
                                                            <option>TT</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='BMW'">
                                                        <label class="form-label" for="Make">BMW Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>125i</option>
                                                            <option>135i </option>
                                                            <option>220i</option>
                                                            <option>235i</option>
                                                            <option>318i</option>
                                                            <option>320i </option>
                                                            <option>323i</option>
                                                            <option>328i</option>
                                                            <option>330i</option>
                                                            <option>335i</option>
                                                            <option>340i</option>
                                                            <option>428i</option>
                                                            <option>430i</option>
                                                            <option>435i</option>
                                                            <option>520i</option>
                                                            <option>523i</option>
                                                            <option>525i</option>
                                                            <option>528i</option>
                                                            <option>530i</option>
                                                            <option>535i</option>
                                                            <option>550i</option>
                                                            <option>650i</option>
                                                            <option>728i</option>
                                                            <option>730i</option>
                                                            <option>740i</option>
                                                            <option>M1</option>
                                                            <option>M2</option>
                                                            <option>M3</option>
                                                            <option>M4</option>
                                                            <option>M5</option>
                                                            <option>X5</option>
                                                            <option>X6</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Cadillac'">
                                                        <label class="form-label" for="Make">Cadillac Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>ATS</option>
                                                            <option>CTS</option>
                                                            <option>Escalade</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Chevrolet'">
                                                        <label class="form-label" for="Make">Chevrolet Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Camaro</option>
                                                            <option>Caprice</option>
                                                            <option>Corvette</option>
                                                            <option>Corvette C6</option>
                                                            <option>Cruze</option>
                                                            <option>Impala</option>
                                                            <option>Lumina</option>
                                                            <option>Malibu</option>
                                                            <option>Silverado</option>
                                                            <option>Tahoe</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Chrysler'">
                                                        <label class="form-label" for="Make">Chrysler Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>300C</option>
                                                            <option>LESSER</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Dodge'">
                                                        <label class="form-label" for="Make">Dodge Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Caliber</option>
                                                            <option>Challenger</option>
                                                            <option>Charger</option>
                                                            <option>Durango</option>
                                                            <option>RAM</option>
                                                            <option>RAM 1500</option>
                                                            <option>SRT 4</option>
                                                            <option>Viper</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Fiat'">
                                                        <label class="form-label" for="Make">Fiat Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>500</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Ford'">
                                                        <label class="form-label" for="Make">Ford Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Crown Victoria</option>
                                                            <option>Ecosport</option>
                                                            <option>Expedition </option>
                                                            <option>Explorer</option>
                                                            <option>F 150</option>
                                                            <option>Focus</option>
                                                            <option>Focus ST</option>
                                                            <option>Fox</option>
                                                            <option>Fusion</option>
                                                            <option>Mustang</option>
                                                            <option>Mustang Shelby</option>
                                                            <option>Shelby</option>
                                                            <option>Taurus</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Geely'">
                                                        <label class="form-label" for="Make">Geely Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Emgrand GT</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='GMC'">
                                                        <label class="form-label" for="Make">GMC Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Sierra</option>
                                                            <option>Yukon</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Hyundai'">
                                                        <label class="form-label" for="Make">Hyundai Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Accent</option>
                                                            <option>Elantra </option>
                                                            <option>Genesis</option>
                                                            <option>Santa Fe</option>
                                                            <option>Sonata</option>
                                                            <option>Tucson</option>
                                                            <option>Veloster</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Honda'">
                                                        <label class="form-label" for="Make">Honda Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Accord</option>
                                                            <option>Civic</option>
                                                            <option>CR-Z</option>
                                                            <option>CRX</option>
                                                            <option>S2000</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Infiniti'">
                                                        <label class="form-label" for="Make">Infiniti Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>FX35</option>
                                                            <option>FX50</option>
                                                            <option>G25</option>
                                                            <option>G35</option>
                                                            <option>G37</option>
                                                            <option>M37</option>
                                                            <option>M56</option>
                                                            <option>Q50</option>
                                                            <option>Q50 S</option>
                                                            <option>Q60</option>
                                                            <option>QX50</option>
                                                            <option>QX60</option>
                                                            <option>QX70</option>
                                                            <option>QX80</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Jaguar'">
                                                        <label class="form-label" for="Make">Jaguar Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>XF</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Jeep'">
                                                        <label class="form-label" for="Make">Jeep Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Cherokee</option>
                                                            <option>Compass</option>
                                                            <option>Grand Cherokee</option>
                                                            <option>JK</option>
                                                            <option>JL</option>
                                                            <option>Renegade </option>
                                                            <option>Wrangler</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Kia'">
                                                        <label class="form-label" for="Make">Kia Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Cerato</option>
                                                            <option>Opirus</option>
                                                            <option>Optima</option>
                                                            <option>Rio</option>
                                                            <option>Sorento</option>
                                                            <option>Stinger</option>
                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Land Rover'">
                                                        <label class="form-label" for="Make">Land Rover Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Defender</option>
                                                            <option>Discovery Sport</option>
                                                            <option>Range Rover Evoque </option>
                                                            <option>Range Rover Spor</option>
                                                            <option>Range Rover Vogue</option>
                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Lexus'">
                                                        <label class="form-label" for="Make">Lexus Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>300</option>
                                                            <option>300 IS</option>
                                                            <option>CT 200 H</option>
                                                            <option>ES 250</option>
                                                            <option>ES 300</option>
                                                            <option>ES 350</option>
                                                            <option>GS 300</option>
                                                            <option>GS 350</option>
                                                            <option>GS 351</option>
                                                            <option>GS 400</option>
                                                            <option>GS 430</option>
                                                            <option>GS 460</option>
                                                            <option>GS-F</option>
                                                            <option>IS 200</option>
                                                            <option>IS 200 T</option>
                                                            <option>IS 250</option>
                                                            <option>IS 300</option>
                                                            <option>IS 350</option>
                                                            <option>IS 430</option>
                                                            <option>IS F</option>
                                                            <option>LS 400</option>
                                                            <option>LS 430</option>
                                                            <option>LS 460</option>
                                                            <option>LX 470</option>
                                                            <option>LX 570</option>
                                                            <option>NX 300</option>
                                                            <option>RC 350</option>
                                                            <option>RX 350</option>
                                                            <option>S 350</option>
                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Lincoln'">
                                                        <label class="form-label" for="Make">Lincoln Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Navigator</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Maserati'">
                                                        <label class="form-label" for="Make">Maserati Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Ghibli</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Mazda'">
                                                        <label class="form-label" for="Make">Mazda Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>3</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                            <option>CX-9</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Mercedes Benz'">
                                                        <label class="form-label" for="Make">Mercedes Benz Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>A 250</option>
                                                            <option>A 45 AMG</option>
                                                            <option>C 180</option>
                                                            <option>C 200</option>
                                                            <option>C 220</option>
                                                            <option>C 230</option>
                                                            <option>C 250</option>
                                                            <option>C 280</option>
                                                            <option>C 300</option>
                                                            <option>C 350</option>
                                                            <option>C 400</option>
                                                            <option>C 43 AMG</option>
                                                            <option>C 450 AMG</option>
                                                            <option>C 63 AMG</option>
                                                            <option>CLA 200</option>
                                                            <option>CLA 250</option>
                                                            <option>CLA 45 AMG</option>
                                                            <option>CLS 500</option>
                                                            <option>E 200</option>
                                                            <option>E 250</option>
                                                            <option>E 300</option>
                                                            <option>E 350</option>
                                                            <option>E 420</option>
                                                            <option>E 55 AMG</option>
                                                            <option>E 550</option>
                                                            <option>E 63 AMG</option>
                                                            <option>G 55 AMG</option>
                                                            <option>G 63 AMG</option>
                                                            <option>GLA 250</option>
                                                            <option>ML 350</option>
                                                            <option>ML 500</option>
                                                            <option>S 350</option>
                                                            <option>S 400</option>
                                                            <option>S 420</option>
                                                            <option>S 500</option>
                                                            <option>S 550</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='MG'">
                                                        <label class="form-label" for="Make">MG Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>MG 6</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Mini'">
                                                        <label class="form-label" for="Make">Mini Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Cooper</option>
                                                            <option>Cooper S</option>

                                                        </select>
                                                    </div>

                                                    <div class="form-group" v-if="Make==='Mitsubishi'">
                                                        <label class="form-label" for="Make">Mitsubishi Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Eclipse </option>
                                                            <option>Evo</option>
                                                            <option>Lancer</option>
                                                            <option>Outlander</option>
                                                            <option>Pajero</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Nissan'">
                                                        <label class="form-label" for="Make">Nissan Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Altima</option>
                                                            <option>Armada </option>
                                                            <option>Frontier </option>
                                                            <option>GTR</option>
                                                            <option>Juke</option>
                                                            <option>Kicks</option>
                                                            <option>Maxima</option>
                                                            <option>Murano</option>
                                                            <option>Navara</option>
                                                            <option>Pathfinder</option>
                                                            <option>Patrol</option>
                                                            <option>Patrol VTEC</option>
                                                            <option>Qashqai</option>
                                                            <option>Sentra</option>
                                                            <option>Silvia S13</option>
                                                            <option>Skyline</option>
                                                            <option>Sunny</option>
                                                            <option>Tida</option>
                                                            <option>Titan</option>
                                                            <option>Versa</option>
                                                            <option>Xterra </option>
                                                            <option>Z 350</option>
                                                            <option>Z 370</option>
                                                            <option>ZX 280</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Peugeot'">
                                                        <label class="form-label" for="Make">Peugeot Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>106</option>
                                                            <option>207</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Porsche'">
                                                        <label class="form-label" for="Make">Porsche Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Cayenne</option>
                                                            <option>Cayman</option>
                                                            <option>Macan</option>
                                                            <option>Panamera</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Subaru'">
                                                        <label class="form-label" for="Make">Subaru Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>BRZ</option>
                                                            <option>Forester</option>
                                                            <option>Impreza</option>
                                                            <option>Legacy</option>
                                                            <option>STI</option>
                                                            <option>SVX</option>
                                                            <option>WRX</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Suzuki'">
                                                        <label class="form-label" for="Make">Suzuki Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Jimny</option>
                                                            <option>Kizashi</option>
                                                            <option>Swift</option>
                                                            <option>WRX</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Toyota'">
                                                        <label class="form-label" for="Make">Toyota Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>86</option>
                                                            <option>4 Runner</option>
                                                            <option>Aurion</option>
                                                            <option>Avalon</option>
                                                            <option>Camry</option>
                                                            <option>Corolla </option>
                                                            <option>FJ</option>
                                                            <option>Fortuner</option>
                                                            <option>Hiace</option>
                                                            <option>Hilux</option>
                                                            <option>Highlander</option>
                                                            <option>Innova</option>
                                                            <option>Land Cruiser</option>
                                                            <option>MR 2</option>
                                                            <option>Parado</option>
                                                            <option>Prado</option>
                                                            <option>Prius </option>
                                                            <option>Rav 4</option>
                                                            <option>Sequoia</option>
                                                            <option>Sienna</option>
                                                            <option>Supra</option>
                                                            <option>Tacoma</option>
                                                            <option>Tundra</option>
                                                            <option>XA</option>
                                                            <option>Yaris</option>

                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Volvo'">
                                                        <label class="form-label" for="Make">Volvo Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>C 300</option>
                                                            <option>240</option>
                                                        </select>
                                                    </div>

                                                    <!--  -->
                                                    <div class="form-group" v-if="Make==='Volkswagen'">
                                                        <label class="form-label" for="Make">Volkswagen Brands</label>

                                                        <select id="Model" class="form-select" v-model="CarModel" placeholder="Model" required>
                                                            <option>Choose an option</option>
                                                            <option>Beetle </option>
                                                            <option>CC</option>
                                                            <option>Golf</option>
                                                            <option>Golf R</option>
                                                            <option>GTI</option>
                                                            <option>Jetta</option>
                                                            <option>Passat</option>
                                                            <option>Scirocco</option>
                                                            <option>STI</option>
                                                            <option>Tiguan</option>
                                                            <option>Touareg</option>
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="col-4 col-sm-12">
                                                    <label class="form-label" for="Make">Year</label>
                                                </div>
                                                <div class="col-8 col-sm-12">
                                                    <input id="Year" v-model="Year" class="form-input" type="number" placeholder="Year" required />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="col-4 col-sm-12">
                                                    <label class="form-label" for="Make">Chasis No</label>
                                                </div>
                                                <div class="col-8 col-sm-12">
                                                    <input id="Chasis No" v-model="Chasis_No" class="form-input" type="text" placeholder="Chasis No" required />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="col-4 col-sm-12">
                                                    <label class="form-label" for="Make">No of Cylinders</label>
                                                </div>
                                                <div class="col-8 col-sm-12">
                                                    <input id="No of Cylinders" v-model="No_of_Cylinders" class="form-input" type="text" placeholder="No of Cylinders" required />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="col-4 col-sm-12">
                                                    <label class="form-label" for="Make">Engine Displacement</label>
                                                </div>
                                                <div class="col-8 col-sm-12">
                                                    <input id="Engine Displacement" v-model="Engine_Displacement" class="form-input" type="text" placeholder="Engine Displacement" required />
                                                </div>
                                            </div>

                                            <!-- form input control -->
                                            <div class="form-group" style="display: block">
                                                <label class="form-label" for="Attach-vehicle-Image">Attach vehicle Image</label>
                                                <input aria-label="Attach  Vehicle Image" placeholder="Attach Vehicle Image" type="file" id="file2" ref="file2" v-on:change="handleFileUpload2()" required />
                                            </div>
                                            <!--  -->

                                            <!-- form input control -->
                                            <div class="form-group" style="display: block">
                                                <label class="form-label" for="Attach-mulkiya-Image">Attach Mulkiya Image</label>
                                                <input aria-label="Attach Mulkiya Image" placeholder="Attach Mulkiya Image" type="file" id="file3" ref="file3" v-on:change="handleFileUpload3()" required />
                                            </div>
                                            <!--  -->

                                            <div class="text-right">
                                                <button class="BtnSend" type="submit">
                                                    Add Vehical
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="columns">
                        <div v-for="item in Vehical" :key="item" class="
                  column
                  col-4 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4
                  Spacer
                ">
                            <!--  -->

                            <VehicalHolder :Make="item._id" />

                            <!--  -->
                        </div>
                    </div>

                    <!--  -->
                </div>
                <div class="
              column
              col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12
            " style="margin-top: 50px; margin-bottom: 30px">
                    <router-link class="Mybtn" to="/purchase-history">Purchase History</router-link>
                    <!-- <router-link class="Mybtn" to="/service-history">Service History</router-link> -->
                </div>
            </div>
        </div>
    </div>
</div>
<div v-else class="PageHolder" style="
      min-height: 600px;
      display: flex;
      color: black;
      align-items: center;
      justify-content: center;
    ">
    You need to
    <router-link style="padding-left: 5px; padding-right: 5px; text-decoration: underline" to="/login">login</router-link>
    to access this page. Please enter your username and password and click
    <router-link style="padding-left: 5px; padding-right: 5px; text-decoration: underline" to="/login">login</router-link>.
</div>
</template>

<script>
import VehicalHolder from "@/components/vehical.vue";
import axios from "axios";
import router from "../router";
var notyf = new Notyf();

export default {
    data() {
        return {
            User: null,
            Vehical: null,
            ProfilePic: null,
            Make: "Choose an option",
            CarModel: "Choose an option",
            Year: "",
            Chasis_No: "",
            No_of_Cylinders: "",
            Engine_Displacement: "",
            file: [],
            file2: [],
            file3: [],
            Type: "Choose an option",
        };
    },
    components: {
        VehicalHolder
    },
    mounted() {
        axios
            .get(
                "https://binzaher.com/api/api/cockpit/assets?token=b8766574e1a92b4e6296441248669c&filter[email]=" +
                this.UserEmail +
                "_Profile"
            )
            .then((response) => {
                this.ProfilePic = response.data.assets[0];
                console.log("ProfilePic", response.data.assets[0]);
            });

        axios
            .get(
                "https://binzaher.com/api/api/cockpit/listUsers?token=b8766574e1a92b4e6296441248669c&filter[_id]=" +
                this.UserID
            )
            .then((response) => {
                this.User = response.data[0];
                console.log("USER", response.data[0]);
            });

        axios
            .get(
                "https://binzaher.com/api/api/collections/entries/my_vehicles?token=b8766574e1a92b4e6296441248669c&filter[User_Email]=" +
                this.UserEmail
            )
            .then((response) => {
                this.Vehical = response.data.entries;
                console.log("Vehical", response.data.entries);
            });
    },
    computed: {
        UserID() {
            return sessionStorage.getItem("customersId");
        },
        UserEmail() {
            return sessionStorage.getItem("customersEmail");
        },
    },
    methods: {
        processFormProfile: function () {
            let formData = new FormData();

            formData.append("files[]", this.file);
            formData.append("meta[email]", this.UserEmail + "_Profile");

            axios
                .post(
                    "https://binzaher.com/api/api/cockpit/addAssets?token=b8766574e1a92b4e6296441248669c",
                    formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                )

                .then((response) => {
                    //
                    notyf.success("Profile Picture Update Success.");
                    console.log(response.data.assets[0].path);
                    window.setTimeout(function () {
                        window.location.href = "/profile";
                    }, 3000);
                    //
                })
                .catch((error) => {
                    console.log(error);
                })
                .then(function () {});

            //
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
        },

        processForm: function () {
            var data = JSON.stringify({
                user: {
                    _id: this.UserID,
                    password: this.Password,
                    email: this.UserEmail,
                },
            });

            var config = {
                method: "post",
                url: "https://binzaher.com/api/api/cockpit/saveUser?token=b8766574e1a92b4e6296441248669c",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };

            axios(config)
                .then(function (response) {
                    notyf.success("Password has been updated.");
                    window.setTimeout(function () {
                        router.push({
                            path: "/login",
                        });
                    }, 3000);

                    console.log(response.data);
                    //alert("Registration success. please login to access the portal.");
                })
                .catch(function (error) {
                    notyf.error("Update Failed.");
                });
        },

        processFormVehical: function () {
            let formData = new FormData();

            formData.append("files[]", this.file2);
            formData.append(
                "meta[Vehical]",
                this.UserEmail + "_Vehical_" + this.Chasis_No
            );

            axios.post(
                "https://binzaher.com/api/api/cockpit/addAssets?token=b8766574e1a92b4e6296441248669c",
                formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            let formData3 = new FormData();

            formData3.append("files[]", this.file3);
            formData3.append(
                "meta[Vehical]",
                this.UserEmail + "_mulkiya_" + this.Chasis_No
            );

            axios.post(
                "https://binzaher.com/api/api/cockpit/addAssets?token=b8766574e1a92b4e6296441248669c",
                formData3, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            var data = JSON.stringify({
                data: {
                    Type: this.Type,
                    Make: this.Make,
                    CarModel: this.CarModel,
                    Year: this.Year,
                    Chasis_No: this.Chasis_No,
                    No_of_Cylinders: this.No_of_Cylinders,
                    Engine_Displacement: this.Engine_Displacement,
                    User_Email: this.UserEmail,
                },
            });

            var config = {
                method: "post",
                url: "https://binzaher.com/api/api/collections/save/my_vehicles?token=b8766574e1a92b4e6296441248669c",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };

            axios(config)
                .then(function (response) {
                    notyf.success("Success.");
                    window.setTimeout(function () {
                        window.location.href = "/profile";
                    }, 3000);

                    console.log(response.data);
                    //alert("Registration success. please login to access the portal.");
                })
                .catch(function (error) {
                    notyf.error("Failed.");
                });
        },
        handleFileUpload2() {
            this.file2 = this.$refs.file2.files[0];
        },
        handleFileUpload3() {
            this.file3 = this.$refs.file3.files[0];
        },
    },
};
</script>

<style scoped>
.HolderBttn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 30px;
}

input#file,
input#file2,
input#file3 {
    font-size: 10px;
    margin-top: 5px;
    background-color: transparent;
}

.column.col-4.col-xs-12.col-sm-12.col-md-4.col-lg-4.col-xl-4.Spacer {
    margin-bottom: 10px;
}

button.ProilePicSend {
    background: #686868;
    border: none;
    display: inline;
    margin: 5px;
    color: white;
    cursor: pointer;
}

a.Mybtn {
    bottom: 30px;
    right: 30px;
    z-index: 1;
    color: #212121;
    font-style: italic;
    text-transform: uppercase;
    border: 2px solid;
    padding: 5px;
    margin-right: 15px;
}

button.BtnSend,
a.BtnSend {
    color: #c72843;
    background: transparent;
    outline: none;
    border: none;
    font-size: 20px;
    font-style: italic;
    cursor: pointer;
}

.PageHolder.Holder {
    background-image: url(/src/assets/long-stripe.svg);
    background-repeat: no-repeat;
    background-position: right center;
    background-color: white;
    background-size: contain;
}

.CHolder {
    padding-top: 50px;
    padding-bottom: 100px;
}

.RegisterHolder {
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
    color: black;
    top: 0;
    bottom: 0;
    width: 100%;
    left: 0;
    right: 0;

    max-width: 1180px;
}

.columns.Holding {
    display: block;
    width: 100%;
    padding-bottom: 20px;
}

@media only screen and (max-width: 600px) {
    .RegisterHolder {
        display: block;
    }

    .CHolder {
        padding-top: 0;
        padding-bottom: 0;
    }

    .PageHolder.Holder {
        background-image: none;
    }
}
</style>
