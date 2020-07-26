import React from 'react';
import './search.css';

function Sorting(props) {

  return (
    <div id='sorting-div'>

      <section class="sort-box-1">

        <h6 class="font-weight-bold form-field">Sort by:</h6>
        <div class='sortby-wrapper'>
          <div class="form-check pl-0 form-field nextto">
            <input type="checkbox" class="form-check-input filled-in" id="new" />
            <label class="form-check-label small text-uppercase card-link-secondary" for="new">Best Match</label>
          </div>
          <div class="form-check pl-0 form-field">
            <input type="checkbox" class="form-check-input filled-in" id="used" />
            <label class="form-check-label small text-uppercase card-link-secondary" for="used">Orders</label>
          </div>
          <div class="form-check pl-0 form-field">
            <input type="checkbox" class="form-check-input filled-in" id="collectible" />
            <label class="form-check-label small text-uppercase card-link-secondary" for="collectible">Newest</label>
          </div>
          <div class="form-check pl-0 form-field pb-1">
            <input type="checkbox" class="form-check-input filled-in" id="renewed" />
            <label class="form-check-label small text-uppercase card-link-secondary" for="renewed">Price</label>
          </div>
        </div>

      </section>

      {/* <section class="sort-box-1">

        <h6 class="font-weight-bold form-field">Avg. Customer Review</h6>

        <a href="#!">
          <ul class="rating">
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <p class="small text-uppercase card-link-secondary px-2">& Up</p>
            </li>
          </ul>
        </a>
        <a href="#!">
          <ul class="rating">
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <p class="small text-uppercase card-link-secondary px-2">& Up</p>
            </li>
          </ul>
        </a>
        <a href="#!">
          <ul class="rating">
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <p class="small text-uppercase card-link-secondary px-2">& Up</p>
            </li>
          </ul>
        </a>
        <a href="#!">
          <ul class="rating">
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <p class="small text-uppercase card-link-secondary px-2">& Up</p>
            </li>
          </ul>
        </a>

      </section> */}

      <section class="sort-box-1">

        <h6 class="font-weight-bold form-field">Price</h6>

        <div class="input-group sort-box-1">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox" aria-label="Checkbox for following text input" />
              <p> UNDER 25$ </p>
            </div>
          </div>
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox" aria-label="Checkbox for following text input" />
              <p> $25 TO $50 </p>
            </div>
          </div>
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox" aria-label="Checkbox for following text input" />
              <p> $50 TO $100 </p>
            </div>
          </div>
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox" aria-label="Checkbox for following text input" />
              <p> $100 TO $200 </p>
            </div>
          </div>
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox" aria-label="Checkbox for following text input" />
              <p> $200 & ABOVE </p>
            </div>
          </div>
        </div>

        <div class="slider-price d-flex align-items-center my-4">
          <span class="font-weight-normal small text-muted mr-2">$0</span>
          <form class="multi-range-field w-100 mb-1">
            <input id="multi" class="multi-range range-width" type="range" />
          </form>
          <span class="font-weight-normal small text-muted ml-2">$100</span>
        </div>

      </section>

    </div>
  );
}


export default Sorting;
