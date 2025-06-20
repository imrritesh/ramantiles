import React, { Component } from 'react';
import profilepic from '../assets/images/profilepic.jpg'; 


class About extends Component {
  render() {
    if (this.props.data) {
      var bio = this.props.data.bio;
      //var profilepic = "../assets/images/" + this.props.data.image;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Store's Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Us</h2>
            <p>{bio}</p>

            <div className="row">
              <div className="offerings-section">
                <h2>Product & Services Offerings</h2>
                <div className="offerings-columns">
                  <ul>
                    <li>Tiles</li>
                    <li>Marbles</li>
                    <li>Bathware</li>
                    <li>Sanitaryware</li>
                    <li>Adhesives & Grouts</li>
                  </ul>
                  <ul>
                    <li>Bathroom Accessories</li>
                    <li>Kitchen Sinks</li>
                    <li>Faucets & Showers</li>
                    <li>Wall Cladding</li>
                    <li>Designer Solutions</li>
                  </ul>
                  <ul>
                    <li>Granite</li>
                    <li>Pipe Fitting</li>
                    <li>Water Tanks</li>
                    <li>Water Pumps</li>
                    <li>Hardware Items</li>
                  </ul>
                  
                  
                </div>
                
              </div>
            </div>

            <div className="catalogue-action">
              <button className="catalogue-btn">View Product Catalogue</button>

                  <select
                    className="catalogue-dropdown"
                    onChange={(e) => {
                      const selectedUrl = e.target.value;
                      if (selectedUrl !== '') {
                        window.open(selectedUrl, '_blank');
                      }
                    }}
                  >
                    <option value="">Select Category</option>
                    <option value="https://www.kajariaceramics.com/catalogo/pvt/catalogo_generale/">Kajaria General Catalogue</option>
                    <option value="https://www.kajariaceramics.com/m/wall-tiles.php">Wall Tiles</option>
                    <option value="https://www.kajariaceramics.com/m/living-rooms-wall-tile-concepts.php">Living Room Wall Tiles</option>
                    <option value="https://www.kajariaceramics.com/m/bathrooms-floor-tile-concepts.php">Bathroom Floor Tiles</option>
                    <option value="https://www.kajariaceramics.com/m/kitchens-floor-tile-concepts.php">Kitchen Floor Tiles</option>
                    <option value="https://www.kajariaceramics.com/m/products-listing.php?page=walltiles&type=concept&category=6&device=desktop">Outdoor Wall Tiles</option>
                    <option value="https://www.kajariaceramics.com/m/products-listing.php?page=walltiles&type=concept&category=4&device=desktop">Wall Tiles For Commercial Space</option>
                    <option value="https://www.kajariaeternity.com/catalogo/kasamood-2025/">Kasa Mood</option>
                    <option value="https://www.kajariaeternity.com/catalogo/fullbody-catalogue-60x120-80x80-60x60/">Full Body</option>
                    <option value="https://www.kajariaceramics.com/catalogo/ceramic/floor_north_east/">Ceramic Floor Tiles</option>
                    <option value="https://www.kajariaceramics.com/catalogo/ceramic/wall_north_east/">Ceramic Wall Tiles</option>
                    <option value="https://www.kajariaceramics.com/catalogo/ceramic/durock_40x40cm/">Outdoor Ceramic Floor Tiles</option>
                    <option value="https://www.kajariaeternity.com/catalogo/product_catalogue_new/2-3/">Kajaria Eternity Floor Tiles</option>
                  </select>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default About;
