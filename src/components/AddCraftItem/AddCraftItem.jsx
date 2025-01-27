import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const AddCraftItem = () => {
  const handleAddCraft = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const subcategoryBox = document.getElementById("subcategory").value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customizationBox = document.getElementById("customization").value;
    const processingTime = form.processingTime.value;
    const available = document.getElementById("available").value;
    const email = form.email.value;
    const userName = form.userName.value;

    const newCraft = {
      name,
      photo,
      subcategoryBox,
      shortDescription,
      price,
      rating,
      customizationBox,
      processingTime,
      available,
      email,
      userName,
    };

    // Send data to the server
    fetch("https://server-side-assignment-ten.vercel.app/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft Item Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Adding Craft Item failed",
            icon: "error",
            confirmButtonText: "Exit",
          });
        }
      });
  };

  return (
    <div className="bg-pink-50 text-black rounded-xl mx-10 p-10 md:p-24">
      <Helmet>
        <title>Add Craft Item | Fabric Fusion</title>
      </Helmet>
      <Fade>
        <h2 className="text-3xl font-extrabold text-pink-600 text-center">
          Add A Craft Item
        </h2>
      </Fade>
      <form onSubmit={handleAddCraft}>
        {/* Form Name and Quantity Row */}
        <div className="md:flex flex-col items-center gap-4 mt-2">
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-pink-600">
              Item Name
            </label>
            <div className="flex">
              <input
                type="text"
                name="name"
                required
                placeholder="Item Name"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-pink-600">
              Image URL
            </label>
            <div className="flex">
              <input
                type="text"
                name="photo"
                required
                placeholder="Image URL"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-pink-600">Subcategory</span>
              </div>
              <select className="select select-bordered" id="subcategory">
                <option>Embroidery</option>
                <option>Knitting & Crocheting</option>
                <option> Quilting</option>
                <option>Beadwork</option>
                <option>Tie-Dyeing</option>
                <option>Macrame</option>
              </select>
            </label>
          </div>
        </div>
        {/* Form Supplier and Taste Row */}
        <div className="md:flex flex-col items-center gap-4 mt-2">
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-pink-600">
              Short Description
            </label>
            <div className="flex">
              <input
                type="text"
                name="shortDescription"
                required
                placeholder="Short Description"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-pink-600">
              Price
            </label>
            <div className="flex">
              <input
                type="text"
                name="price"
                required
                placeholder="Price"
                className="flex py-2 flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
        </div>
        {/* Form Category and Details Row */}
        <div className="md:flex flex-col items-center gap-4 mt-2">
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-pink-600">
              Rating
            </label>
            <div className="flex">
              <input
                type="text"
                name="rating"
                required
                placeholder="Rating"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-pink-600">
                  Customization Available?
                </span>
              </div>
              <select className="select select-bordered" id="customization">
                <option>Yes</option>
                <option>No</option>
              </select>
            </label>
          </div>
        </div>
        {/* Form Photo Row */}
        <div className="mt-2">
          <div className="md:w-1/2 mx-auto">
            <label className="block mb-1 text-sm font-medium text-pink-600">
              Processing Time
            </label>
            <div className="flex">
              <input
                type="text"
                name="processingTime"
                required
                placeholder="Processing Time"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2 mx-auto">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-pink-600">
                  Is product available?
                </span>
              </div>
              <select className="select select-bordered" id="available">
                <option>In Stock</option>
                <option>Made to Order</option>
              </select>
            </label>
          </div>
          <div className="md:w-1/2 mx-auto mt-2">
            <label className="block mb-1 text-sm font-medium text-pink-600">
              User Email
            </label>
            <div className="flex">
              <input
                type="text"
                name="email"
                required
                placeholder="User Email"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2 mx-auto mt-2">
            <label className="block mb-1 text-sm font-medium text-pink-600">
              User Name
            </label>
            <div className="flex">
              <input
                type="text"
                name="userName"
                required
                placeholder="User Name"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Add Craft"
          className="btn w-1/2 mt-4 bg-pink-100 text-pink-600 block mx-auto"
        />
      </form>
    </div>
  );
};

export default AddCraftItem;
