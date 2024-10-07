// services/user.service.js
const {
  User,
  Address,

  Product,

  Material,
  Design,
  Measurement,

  ShirtMaterial,
  ShirtDesign,
  ShirtMeasurement,

  PoloShirtMaterial,
  PoloShirtDesign,
  PoloShirtMeasurement,

  CoatMaterial,
  CoatDesign,
  CoatMeasurement,

  OvercoatMaterial,
  OvercoatDesign,
  OvercoatMeasurement,

  PantMaterial,
  PantDesign,
  PantMeasurement,

  JeansMaterial,
  JeansDesign,
  JeansMeasurement,

  ChinosMaterial,
  ChinosDesign,
  ChinosMeasurement,
} = require("../database/models");
const { cloudinary } = require("../utils");
const { InvalidFieldError, AppError } = require("../errors");

const getUserProfile = async (req) => {
  const user = req.user;

  const userProfile = await User.findById({ _id: user._id }).select(
    "-password -refreshToken -role -orders role -orders -carts -addresses -measurementProfiles -bodyShapeProfiles"
  );

  return { userProfile };
};
const updateUserProfile = async (req) => {
  const user = req.user;
  const newUserDetails = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      $set: newUserDetails,
    },
    { new: true }
  ).select(
    "-password -refreshToken -role -orders role -orders -carts -addresses -measurementProfiles -bodyShapeProfiles"
  );

  return { updatedUser };
};
const updateUserAvatar = async (req) => {
  const user = req.user;
  const newUserAvatar = req.file;

  const newAvatarUrl = await cloudinary.uploadOnCloudinary(newUserAvatar.path);

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      $set: { avatar: newAvatarUrl.url },
    },
    { new: true }
  ).select(
    "-password -refreshToken -role -orders role -orders -carts -addresses -measurementProfiles -bodyShapeProfiles"
  );

  return { updatedUser };
};

const getAddresses = async (req) => {
  const user = req.user;
  const addresses = await Address.find({ userId: user._id });
  return { addresses };
};
const createAddress = async (req) => {
  const user = req.user;
  const {
    addressProfileName,
    address,
    city,
    pincode,
    state,
    country,
    countryCode,
    phoneNumber,
  } = req.body;
  const newAddress = new Address({
    userId: user._id,
    addressProfileName,
    address,
    city,
    pincode,
    state,
    country,
    countryCode,
    phoneNumber,
  });
  await newAddress.save();
  return { newAddress };
};
const updateAddress = async (req) => {
  const addressId = req.params.id;
  const user = req.user;
  const newAddress = req.body;
  const updatedAddress = await Address.findByIdAndUpdate(
    addressId,
    {
      $set: { userId: user._id, ...newAddress },
    },
    { new: true }
  );
  return { updatedAddress };
};
const deleteAddress = async (req) => {
  const addressId = req.params.id;
  const deletedAddress = await Address.findByIdAndDelete(addressId);
  return { deletedAddress };
};

const getCarts = async (req) => {
  const user = req.user;

  const products = await Product.find({ userId: user._id });

  const carts = await Promise.all(
    products.map(async (product, index) => {
      try {
        const mainMaterial = await Material.findById(product.materialId);
        const mainDesign = await Design.findById(product.designId);
        const mainMeasurement = await Measurement.findById(
          product.measurementId
        );

        let realMaterial;
        let realDesign;
        let realMeasurement;

        // Handle Material types
        switch (mainMaterial.materialType) {
          case "ShirtMaterial":
            realMaterial = await ShirtMaterial.findById(
              mainMaterial.materialId
            );
            break;
          case "PoloShirtMaterial":
            realMaterial = await PoloShirtMaterial.findById(
              mainMaterial.materialId
            );
            break;
          case "CoatMaterial":
            realMaterial = await CoatMaterial.findById(mainMaterial.materialId);
            break;
          case "OvercoatMaterial":
            realMaterial = await OvercoatMaterial.findById(
              mainMaterial.materialId
            );
            break;
          case "PantMaterial":
            realMaterial = await PantMaterial.findById(mainMaterial.materialId);
            break;
          case "JeansMaterial":
            realMaterial = await JeansMaterial.findById(
              mainMaterial.materialId
            );
            break;
          case "ChinosMaterial":
            realMaterial = await ChinosMaterial.findById(
              mainMaterial.materialId
            );
            break;
          default:
            throw new Error("Unsupported material type");
        }

        // Handle Design types
        switch (mainDesign.designType) {
          case "ShirtDesign":
            realDesign = await ShirtDesign.findById(mainDesign.designId);
            break;
          case "PoloShirtDesign":
            realDesign = await PoloShirtDesign.findById(mainDesign.designId);
            break;
          case "CoatDesign":
            realDesign = await CoatDesign.findById(mainDesign.designId);
            break;
          case "OvercoatDesign":
            realDesign = await OvercoatDesign.findById(mainDesign.designId);
            break;
          case "PantDesign":
            realDesign = await PantDesign.findById(mainDesign.designId);
            break;
          case "JeansDesign":
            realDesign = await JeansDesign.findById(mainDesign.designId);
            break;
          case "ChinosDesign":
            realDesign = await ChinosDesign.findById(mainDesign.designId);
            break;
          default:
            throw new Error("Unsupported design type");
        }

        // Handle Measurement types
        switch (mainMeasurement.measurementType) {
          case "ShirtMeasurement":
            realMeasurement = await ShirtMeasurement.findById(
              mainMeasurement.measurementId
            );
            break;
          case "PoloShirtMeasurement":
            realMeasurement = await PoloShirtMeasurement.findById(
              mainMeasurement.measurementId
            );
            break;
          case "CoatMeasurement":
            realMeasurement = await CoatMeasurement.findById(
              mainMeasurement.measurementId
            );
            break;
          case "OvercoatMeasurement":
            realMeasurement = await OvercoatMeasurement.findById(
              mainMeasurement.measurementId
            );
            break;
          case "PantMeasurement":
            realMeasurement = await PantMeasurement.findById(
              mainMeasurement.measurementId
            );
            break;
          case "JeansMeasurement":
            realMeasurement = await JeansMeasurement.findById(
              mainMeasurement.measurementId
            );
            break;
          case "ChinosMeasurement":
            realMeasurement = await ChinosMeasurement.findById(
              mainMeasurement.measurementId
            );
            break;
          default:
            throw new Error("Unsupported measurement type");
        }

        return {
          main: {
            productId: product._id,
            materialId: mainMaterial._id,
            designId: mainDesign._id,
            measurement: mainMeasurement._id,
          },
          product: product,
          material: realMaterial,
          design: realDesign,
          measurement: realMeasurement,
        };
      } catch (error) {
        console.error(`Error fetching product with ID: ${product._id}`, error);
        return null;
      }
    })
  );

  // Filter out any null (error) carts
  return { carts: carts.filter((cart) => cart !== null) };
};
const addItemToCart = async (req) => {
  const user = req.user;
  const { selectedMaterial, selectedDesign, selectedMeasurement } = req.body;

  // Fetch the main material
  const mainMaterial = await Material.findOne({
    materialId: selectedMaterial._id,
  });

  let mainDesign;
  let mainMeasurement;

  let realMaterial;
  let realDesign;
  let realMeasurement;

  // Handle Material types
  switch (selectedMaterial.type) {
    case "ShirtMaterial":
      realMaterial = await ShirtMaterial.findById(mainMaterial.materialId);
      break;
    case "PoloShirtMaterial":
      realMaterial = await PoloShirtMaterial.findById(mainMaterial.materialId);
      break;
    case "CoatMaterial":
      realMaterial = await CoatMaterial.findById(mainMaterial.materialId);
      break;
    case "OvercoatMaterial":
      realMaterial = await OvercoatMaterial.findById(mainMaterial.materialId);
      break;
    case "PantMaterial":
      realMaterial = await PantMaterial.findById(mainMaterial.materialId);
      break;
    case "JeansMaterial":
      realMaterial = await JeansMaterial.findById(mainMaterial.materialId);
      break;
    case "ChinosMaterial":
      realMaterial = await ChinosMaterial.findById(mainMaterial.materialId);
      break;
    default:
      throw new Error("Unsupported material type");
  }

  // Handle Design types
  switch (selectedDesign.type) {
    case "ShirtDesign":
      realDesign = new ShirtDesign({
        backCut: selectedDesign.backCuts,
        backYoke: selectedDesign.backYokes,
        button: selectedDesign.buttons,
        collar: selectedDesign.collars,
        cuffCorner: selectedDesign.cuffCorners,
        cuff: selectedDesign.cuffs,
        fastening: selectedDesign.fastenings,
        pocket: selectedDesign.pockets,
        sleeve: selectedDesign.sleeves,
      });
      break;
    case "PoloShirtDesign":
      realDesign = new PoloShirtDesign({
        collar: selectedDesign.collars,
        pocket: selectedDesign.pockets,
        sleeve: selectedDesign.sleeves,
      });
      break;
    case "CoatDesign":
      realDesign = new CoatDesign({
        lapelButtonHole: selectedDesign.lapelButtonHoles,
        lapelStyle: selectedDesign.lapelStyles,
        lapelWidth: selectedDesign.lapelWidths,
        pocketStyle: selectedDesign.pocketStyles,
        sleeveButtonNumber: selectedDesign.sleeveButtonNumbers,
        sleeveButton: selectedDesign.sleeveButtons,
        style: selectedDesign.styles,
        ticketPocket: selectedDesign.ticketPockets,
      });
      break;
    case "OvercoatDesign":
      realDesign = new OvercoatDesign({
        lapelButtonHole: selectedDesign.lapelButtonHoles,
        lapelStyle: selectedDesign.lapelStyles,
        lapelWidth: selectedDesign.lapelWidths,
        pocketStyle: selectedDesign.pocketStyles,
        sleeveButtonNumber: selectedDesign.sleeveButtonNumbers,
        sleeveButton: selectedDesign.sleeveButtons,
        style: selectedDesign.styles,
        ticketPocket: selectedDesign.ticketPockets,
      });
      break;
    case "PantDesign":
      realDesign = new PantDesign({
        backPocket: selectedDesign.backPockets,
        beltLoop: selectedDesign.beltLoops,
        button: selectedDesign.buttons,
        cuff: selectedDesign.cuffs,
        frontClosure: selectedDesign.frontClosures,
        frontPocket: selectedDesign.frontPockets,
        pleat: selectedDesign.pleats,
        pocketButton: selectedDesign.pocketButtons,
      });
      break;
    case "JeansDesign":
      realDesign = new JeansDesign({
        backPocket: selectedDesign.backPockets,
        cuff: selectedDesign.cuffs,
        finishing: selectedDesign.finishings,
        fit: selectedDesign.fits,
        fly: selectedDesign.flys,
        frontPocket: selectedDesign.frontPockets,
        length: selectedDesign.lengths,
      });
      break;
    case "ChinosDesign":
      realDesign = new ChinosDesign({
        backPocket: selectedDesign.backPockets,
        cargoPocket: selectedDesign.cargoPockets,
        fastening: selectedDesign.fastenings,
        fit: selectedDesign.fits,
        frontPocket: selectedDesign.frontPockets,
        hemline: selectedDesign.hemlines,
        length: selectedDesign.lengths,
        pleat: selectedDesign.pleats,
      });
      break;
    default:
      throw new Error("Unsupported design type");
  }

  await realDesign.save();

  mainDesign = new Design({
    userId: user._id,
    designId: realDesign._id,
    designType: selectedDesign.type,
  });
  await mainDesign.save();

  // Handle Measurement types
  switch (selectedMeasurement.type) {
    case "ShirtMeasurement":
      realMeasurement = new ShirtMeasurement({
        userId: user._id,
        profileName: selectedMeasurement.profileName,
        height: selectedMeasurement.height,
        weight: selectedMeasurement.weight,
        bodytype: selectedMeasurement.bodytype,
        neck: selectedMeasurement.neck,
        chest: selectedMeasurement.chest,
        waist: selectedMeasurement.waist,
        hip: selectedMeasurement.hip,
        shoulder: selectedMeasurement.shoulder,
        sleeve: selectedMeasurement.sleeve,
        armHole: selectedMeasurement.armHole,
        cuff: selectedMeasurement.cuff,
        shirtLength: selectedMeasurement.shirtLength,
        bicep: selectedMeasurement.bicep,
        wrist: selectedMeasurement.wrist,
        backLength: selectedMeasurement.backLength,
        frontLength: selectedMeasurement.frontLength,
        pocketWidth: selectedMeasurement.pocketWidth,
        pocketHeight: selectedMeasurement.pocketHeight,
      });
      break;
    case "PoloShirtMeasurement":
      realMeasurement = new PoloShirtMeasurement({
        userId: user._id,
        profileName: selectedMeasurement.profileName,
        height: selectedMeasurement.height,
        weight: selectedMeasurement.weight,
        bodytype: selectedMeasurement.bodytype,
        neck: selectedMeasurement.neck,
        chest: selectedMeasurement.chest,
        waist: selectedMeasurement.waist,
        hip: selectedMeasurement.hip,
        shoulderWidth: selectedMeasurement.shoulderWidth,
        sleeveLength: selectedMeasurement.sleeveLength,
        armHole: selectedMeasurement.armHole,
        cuffWidth: selectedMeasurement.cuffWidth,
        bicep: selectedMeasurement.bicep,
        sleeveOpening: selectedMeasurement.sleeveOpening,
        backLength: selectedMeasurement.backLength,
        frontLength: selectedMeasurement.frontLength,
        poloShirtLength: selectedMeasurement.poloShirtLength,
      });
      break;
    case "CoatMeasurement":
      realMeasurement = new CoatMeasurement({
        userId: user._id,
        profileName: selectedMeasurement.profileName,
        height: selectedMeasurement.height,
        weight: selectedMeasurement.weight,
        bodytype: selectedMeasurement.bodytype,
        neck: selectedMeasurement.neck,
        chest: selectedMeasurement.chest,
        waist: selectedMeasurement.waist,
        hip: selectedMeasurement.hip,
        shoulderWidth: selectedMeasurement.shoulderWidth,
        sleeveLength: selectedMeasurement.sleeveLength,
        armHole: selectedMeasurement.armHole,
        cuff: selectedMeasurement.cuff,
        bicep: selectedMeasurement.bicep,
        wrist: selectedMeasurement.wrist,
        elbow: selectedMeasurement.elbow,
        backLength: selectedMeasurement.backLength,
        frontLength: selectedMeasurement.frontLength,
        coatLength: selectedMeasurement.coatLength,
      });
      break;
    case "OvercoatMeasurement":
      realMeasurement = new OvercoatMeasurement({
        userId: user._id,
        profileName: selectedMeasurement.profileName,
        height: selectedMeasurement.height,
        weight: selectedMeasurement.weight,
        bodytype: selectedMeasurement.bodytype,
        neck: selectedMeasurement.neck,
        chest: selectedMeasurement.chest,
        waist: selectedMeasurement.waist,
        hip: selectedMeasurement.hip,
        shoulderWidth: selectedMeasurement.shoulderWidth,
        sleeveLength: selectedMeasurement.sleeveLength,
        armHole: selectedMeasurement.armHole,
        cuff: selectedMeasurement.cuff,
        bicep: selectedMeasurement.bicep,
        wrist: selectedMeasurement.wrist,
        elbow: selectedMeasurement.elbow,
        lapelWidth: selectedMeasurement.lapelWidth,
        backLength: selectedMeasurement.backLength,
        frontLength: selectedMeasurement.frontLength,
        overcoatLength: selectedMeasurement.overcoatLength,
      });
      break;
    case "PantMeasurement":
      realMeasurement = new PantMeasurement({
        userId: user._id,
        profileName: selectedMeasurement.profileName,
        height: selectedMeasurement.height,
        weight: selectedMeasurement.weight,
        bodytype: selectedMeasurement.bodytype,
        waist: selectedMeasurement.waist,
        hip: selectedMeasurement.hip,
        inseam: selectedMeasurement.inseam,
        outseam: selectedMeasurement.outseam,
        frontRise: selectedMeasurement.frontRise,
        backRise: selectedMeasurement.backRise,
        thighWidth: selectedMeasurement.thighWidth,
        kneeWidth: selectedMeasurement.kneeWidth,
        legOpening: selectedMeasurement.legOpening,
      });
      break;
    case "JeansMeasurement":
      realMeasurement = new JeansMeasurement({
        userId: user._id,
        profileName: selectedMeasurement.profileName,
        height: selectedMeasurement.height,
        weight: selectedMeasurement.weight,
        bodytype: selectedMeasurement.bodytype,
        waist: selectedMeasurement.waist,
        hip: selectedMeasurement.hip,
        inseam: selectedMeasurement.inseam,
        outseam: selectedMeasurement.outseam,
        frontRise: selectedMeasurement.frontRise,
        backRise: selectedMeasurement.backRise,
        thighWidth: selectedMeasurement.thighWidth,
        kneeWidth: selectedMeasurement.kneeWidth,
        legOpening: selectedMeasurement.legOpening,
      });
      break;
    case "ChinosMeasurement":
      realMeasurement = new ChinosMeasurement({
        userId: user._id,
        profileName: selectedMeasurement.profileName,
        height: selectedMeasurement.height,
        weight: selectedMeasurement.weight,
        bodytype: selectedMeasurement.bodytype,
        waist: selectedMeasurement.waist,
        hip: selectedMeasurement.hip,
        inseam: selectedMeasurement.inseam,
        outseam: selectedMeasurement.outseam,
        frontRise: selectedMeasurement.frontRise,
        backRise: selectedMeasurement.backRise,
        thighWidth: selectedMeasurement.thighWidth,
        kneeWidth: selectedMeasurement.kneeWidth,
        legOpening: selectedMeasurement.legOpening,
      });
      break;
    default:
      throw new AppError("Unsupported measurement type", 404);
  }

  await realMeasurement.save();

  mainMeasurement = new Measurement({
    userId: user._id,
    measurementId: realMeasurement._id,
    measurementType: selectedMeasurement.type,
  });
  await mainMeasurement.save();

  // Create product with all related entities
  const product = new Product({
    userId: user._id,
    materialId: mainMaterial._id,
    designId: mainDesign._id,
    measurementId: mainMeasurement._id,
    subTotalPrice: 0,
    totalPrice: 0,
    quantity: 1,
  });

  await product.save();

  return {
    main: {
      productId: product._id,
      materialId: mainMaterial._id,
      designId: mainDesign._id,
      measurement: mainMeasurement._id,
    },
    product: product,
    material: realMaterial,
    design: realDesign,
    measurement: realMeasurement,
  };
};
const incressItemQuantity = async (req) => {
  const productId = req.params.id;

  const product = await Product.findById(productId);

  const newProduct = await Product.findByIdAndUpdate(
    productId,
    {
      $set: { quantity: (product.quantity += 1) },
    },
    { new: true }
  );

  return { newProduct };
};
const decreaseItemQuantity = async (req) => {
  const productId = req.params.id;

  const product = await Product.findById(productId);

  // If the product quantity is 1, remove product and associated design, measurement
  if (product.quantity === 1) {
    const mainMaterial = await Material.findById(product.materialId);
    const mainDesign = await Design.findById(product.designId);
    const mainMeasurement = await Measurement.findById(product.measurementId);

    // Handle Design types
    switch (mainDesign.designType) {
      case "ShirtDesign":
        await ShirtDesign.findByIdAndDelete(mainDesign.designId);
        break;
      case "PoloShirtDesign":
        await PoloShirtDesign.findByIdAndDelete(mainDesign.designId);
        break;
      case "CoatDesign":
        await CoatDesign.findByIdAndDelete(mainDesign.designId);
        break;
      case "OvercoatDesign":
        await OvercoatDesign.findByIdAndDelete(mainDesign.designId);
        break;
      case "PantDesign":
        await PantDesign.findByIdAndDelete(mainDesign.designId);
        break;
      case "JeansDesign":
        await JeansDesign.findByIdAndDelete(mainDesign.designId);
        break;
      case "ChinosDesign":
        await ChinosDesign.findByIdAndDelete(mainDesign.designId);
        break;
      default:
        throw new Error("Unsupported design type");
    }

    // Handle Measurement types
    switch (mainMeasurement.measurementType) {
      case "ShirtMeasurement":
        await ShirtMeasurement.findByIdAndDelete(mainMeasurement.measurementId);
        break;
      case "PoloShirtMeasurement":
        await PoloShirtMeasurement.findByIdAndDelete(
          mainMeasurement.measurementId
        );
        break;
      case "CoatMeasurement":
        await CoatMeasurement.findByIdAndDelete(mainMeasurement.measurementId);
        break;
      case "OvercoatMeasurement":
        await OvercoatMeasurement.findByIdAndDelete(
          mainMeasurement.measurementId
        );
        break;
      case "PantMeasurement":
        await PantMeasurement.findByIdAndDelete(mainMeasurement.measurementId);
        break;
      case "JeansMeasurement":
        await JeansMeasurement.findByIdAndDelete(mainMeasurement.measurementId);
        break;
      case "ChinosMeasurement":
        await ChinosMeasurement.findByIdAndDelete(
          mainMeasurement.measurementId
        );
        break;
      default:
        throw new Error("Unsupported measurement type");
    }

    // Delete the product
    await Product.findByIdAndDelete(productId);
    return {};
  }

  // If quantity is greater than 1, simply decrease the quantity
  const newProduct = await Product.findByIdAndUpdate(
    productId,
    {
      $set: { quantity: (product.quantity -= 1) },
    },
    { new: true }
  );

  return { newProduct };
};

module.exports = {
  getUserProfile,
  updateUserAvatar,
  updateUserProfile,

  getAddresses,
  createAddress,
  updateAddress,
  deleteAddress,

  getCarts,
  addItemToCart,
  incressItemQuantity,
  decreaseItemQuantity,
};
