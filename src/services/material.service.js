// services/material.service.js
const {
  Material,
  ShirtMaterial,
  PoloShirtMaterial,
  CoatMaterial,
  OvercoatMaterial,
  PantMaterial,
  JeansMaterial,
  ChinosMaterial,
} = require("../database/models");
const { cloudinary } = require("../utils");
const { InvalidFieldError, AppError } = require("../errors");

const getMaterials = async (req) => {
  const { limit = 6, skip = 0 } = req.query;
  const materials = await Material.find({})
    .limit(Number(limit))
    .skip(Number(skip));

  const totalCount = await Material.countDocuments();

  return { materials, totalCount };
};
const getShirtsMaterials = async (req) => {
  const { limit = 6, skip = 0 } = req.query;

  const materials = await ShirtMaterial.find({})
    .sort({ createdAt: -1 })
    .limit(Number(limit))
    .skip(Number(skip));

  const totalCount = await ShirtMaterial.countDocuments();

  return { materials, totalCount };
};
const getPoloShirtsMaterials = async (req) => {
  const { limit = 6, skip = 0 } = req.query;

  const materials = await PoloShirtMaterial.find({})
    .sort({ createdAt: -1 })
    .limit(Number(limit))
    .skip(Number(skip));

  const totalCount = await PoloShirtMaterial.countDocuments();

  return { materials, totalCount };
};
const getCoatsMaterials = async (req) => {
  const { limit = 6, skip = 0 } = req.query;

  const materials = await CoatMaterial.find({})
    .sort({ createdAt: -1 })
    .limit(Number(limit))
    .skip(Number(skip));

  const totalCount = await CoatMaterial.countDocuments();
  return { materials, totalCount };
};
const getOvercoatsMaterials = async (req) => {
  const { limit = 6, skip = 0 } = req.query;

  const materials = await OvercoatMaterial.find({})
    .sort({ createdAt: -1 })
    .limit(Number(limit))
    .skip(Number(skip));

  const totalCount = await OvercoatMaterial.countDocuments();
  return { materials, totalCount };
};
const getPantsMaterials = async (req) => {
  const { limit = 6, skip = 0 } = req.query;

  const materials = await PantMaterial.find({})
    .sort({ createdAt: -1 })
    .limit(Number(limit))
    .skip(Number(skip));

  const totalCount = await PantMaterial.countDocuments();
  return { materials, totalCount };
};
const getJeansMaterials = async (req) => {
  const { limit = 6, skip = 0 } = req.query;

  const materials = await JeansMaterial.find({})
    .sort({ createdAt: -1 })
    .limit(Number(limit))
    .skip(Number(skip));

  const totalCount = await JeansMaterial.countDocuments();
  return { materials, totalCount };
};
const getChinosMaterials = async (req) => {
  const { limit = 6, skip = 0 } = req.query;

  const materials = await ChinosMaterial.find({})
    .sort({ createdAt: -1 })
    .limit(Number(limit))
    .skip(Number(skip));

  const totalCount = await ChinosMaterial.countDocuments();
  return { materials, totalCount };
};

// ********** Single Creation of Material **********

const createShirtMaterial = async (req) => {
  const {
    materialName,
    materialCode,
    materialFabric,
    materialColor,
    materialType,
    materialDescription,
    materialPricePerMeter,
    materialGSM,
    materialProperties,
    materialSeasonability,
    materialPattern,
    weavePattern,
    threadCount,
    tags,
  } = req.body;

  const existingShirtMaterial = await ShirtMaterial.findOne({
    $or: [{ materialName }, { materialCode }],
  });

  if (existingShirtMaterial) {
    const field =
      existingShirtMaterial.materialName.toLowerCase() ===
      materialName.toLowerCase()
        ? "Material Name"
        : "Material Code";
    throw new InvalidFieldError(
      "shirt",
      `Shirt ${field} is already taken`,
      403
    );
  }

  const images = [
    ...(req.files?.material?.map((file) => file.path) || []),
    ...(req.files?.materialPreview?.map((file) => file.path) || []),
  ];

  const uploadedFiles = await cloudinary.uploadOnCloudinary(images);
  req.cloudinaryPublicIds = uploadedFiles.map((file) => file.public_id);

  const shirtMaterial = new ShirtMaterial({
    materialName,
    materialCode,
    materialFabric,
    materialColor,
    materialType,
    materialDescription,
    materialPricePerMeter,
    materialGSM,
    materialProperties,
    materialSeasonability,
    materialPattern,
    weavePattern,
    threadCount,
    tags,
    materialURL: uploadedFiles[0]?.url || "image",
    materialPreviewURL: uploadedFiles[1]?.url || "preview",
  });
  await shirtMaterial.save();

  const material = Material({
    materialId: shirtMaterial._id,
    materialType: "ShirtMaterial",
  });
  await material.save();

  return { shirtMaterial, material };
};
const createPoloShirtMaterial = async (req) => {
  const {
    materialName,
    materialCode,
    materialFabric,
    materialColor,
    materialType,
    materialDescription,
    materialPricePerMeter,
    materialGSM,
    materialProperties,
    materialSeasonability,
    materialPattern,
    weavePattern,
    threadCount,
    tags,
  } = req.body;

  const existingPoloShirtMaterial = await PoloShirtMaterial.findOne({
    $or: [{ materialName }, { materialCode }],
  });

  if (existingPoloShirtMaterial) {
    const field =
      existingPoloShirtMaterial.materialName.toLowerCase() ===
      materialName.toLowerCase()
        ? "Material Name"
        : "Material Code";
    throw new InvalidFieldError(
      "poloShirt",
      `Polo Shirt ${field} is already taken`,
      403
    );
  }

  const images = [
    ...(req.files?.material?.map((file) => file.path) || []),
    ...(req.files?.materialPreview?.map((file) => file.path) || []),
  ];

  const uploadedFiles = await cloudinary.uploadOnCloudinary(images);
  req.cloudinaryPublicIds = uploadedFiles.map((file) => file.public_id);

  const poloShirtMaterial = new PoloShirtMaterial({
    materialName,
    materialCode,
    materialFabric,
    materialColor,
    materialType,
    materialDescription,
    materialPricePerMeter,
    materialGSM,
    materialProperties,
    materialSeasonability,
    materialPattern,
    weavePattern,
    threadCount,
    tags,
    materialURL: uploadedFiles[0]?.url || "image",
    materialPreviewURL: uploadedFiles[1]?.url || "preview",
  });
  await poloShirtMaterial.save();

  const material = Material({
    materialId: poloShirtMaterial._id,
    materialType: "PoloShirtMaterial",
  });
  await material.save();

  return { poloShirtMaterial, material };
};
const createCoatMaterial = async (req) => {
  const {
    materialName,
    materialCode,
    materialFabric,
    materialColor,
    materialType,
    materialDescription,
    materialPricePerMeter,
    materialGSM,
    materialProperties,
    materialSeasonability,
    materialPattern,
    weavePattern,
    threadCount,
    tags,
  } = req.body;

  const existingCoatMaterial = await CoatMaterial.findOne({
    $or: [{ materialName }, { materialCode }],
  });

  if (existingCoatMaterial) {
    const field =
      existingCoatMaterial.materialName.toLowerCase() ===
      materialName.toLowerCase()
        ? "Material Name"
        : "Material Code";
    throw new InvalidFieldError("coat", `Coat ${field} is already taken`, 403);
  }

  const images = [
    ...(req.files?.material?.map((file) => file.path) || []),
    ...(req.files?.materialPreview?.map((file) => file.path) || []),
  ];

  const uploadedFiles = await cloudinary.uploadOnCloudinary(images);
  req.cloudinaryPublicIds = uploadedFiles.map((file) => file.public_id);

  const coatMaterial = new CoatMaterial({
    materialName,
    materialCode,
    materialFabric,
    materialColor,
    materialType,
    materialDescription,
    materialPricePerMeter,
    materialGSM,
    materialProperties,
    materialSeasonability,
    materialPattern,
    weavePattern,
    threadCount,
    tags,
    materialURL: uploadedFiles[0]?.url || "image",
    materialPreviewURL: uploadedFiles[1]?.url || "preview",
  });
  await coatMaterial.save();

  const material = Material({
    materialId: coatMaterial._id,
    materialType: "CoatMaterial",
  });
  await material.save();

  return { coatMaterial, material };
};
const createOvercoatMaterial = async (req) => {
  const {
    materialName,
    materialCode,
    materialFabric,
    materialColor,
    materialType,
    materialDescription,
    materialPricePerMeter,
    materialGSM,
    materialProperties,
    materialSeasonability,
    materialPattern,
    weavePattern,
    threadCount,
    tags,
  } = req.body;

  const existingOvercoatMaterial = await OvercoatMaterial.findOne({
    $or: [{ materialName }, { materialCode }],
  });

  if (existingOvercoatMaterial) {
    const field =
      existingOvercoatMaterial.materialName.toLowerCase() ===
      materialName.toLowerCase()
        ? "Material Name"
        : "Material Code";
    throw new InvalidFieldError(
      "overcoat",
      `Overcoat ${field} is already taken`,
      403
    );
  }

  const images = [
    ...(req.files?.material?.map((file) => file.path) || []),
    ...(req.files?.materialPreview?.map((file) => file.path) || []),
  ];

  const uploadedFiles = await cloudinary.uploadOnCloudinary(images);
  req.cloudinaryPublicIds = uploadedFiles.map((file) => file.public_id);

  const overcoatMaterial = new OvercoatMaterial({
    materialName,
    materialCode,
    materialFabric,
    materialColor,
    materialType,
    materialDescription,
    materialPricePerMeter,
    materialGSM,
    materialProperties,
    materialSeasonability,
    materialPattern,
    weavePattern,
    threadCount,
    tags,
    materialURL: uploadedFiles[0]?.url || "image",
    materialPreviewURL: uploadedFiles[1]?.url || "preview",
  });
  await overcoatMaterial.save();

  const material = Material({
    materialId: overcoatMaterial._id,
    materialType: "OvercoatMaterial",
  });
  await material.save();

  return { overcoatMaterial, material };
};
const createPantMaterial = async (req) => {
  const {
    materialName,
    materialCode,
    materialFabric,
    materialColor,
    materialType,
    materialDescription,
    materialPricePerMeter,
    materialGSM,
    materialProperties,
    materialSeasonability,
    materialPattern,
    weavePattern,
    threadCount,
    tags,
  } = req.body;

  const existingPantMaterial = await PantMaterial.findOne({
    $or: [{ materialName }, { materialCode }],
  });

  if (existingPantMaterial) {
    const field =
      existingPantMaterial.materialName.toLowerCase() ===
      materialName.toLowerCase()
        ? "Material Name"
        : "Material Code";
    throw new InvalidFieldError("pant", `Pant ${field} is already taken`, 403);
  }

  const images = [
    ...(req.files?.material?.map((file) => file.path) || []),
    ...(req.files?.materialPreview?.map((file) => file.path) || []),
  ];

  const uploadedFiles = await cloudinary.uploadOnCloudinary(images);
  req.cloudinaryPublicIds = uploadedFiles.map((file) => file.public_id);

  const pantMaterial = new PantMaterial({
    materialName,
    materialCode,
    materialFabric,
    materialColor,
    materialType,
    materialDescription,
    materialPricePerMeter,
    materialGSM,
    materialProperties,
    materialSeasonability,
    materialPattern,
    weavePattern,
    threadCount,
    tags,
    materialURL: uploadedFiles[0]?.url || "image",
    materialPreviewURL: uploadedFiles[1]?.url || "preview",
  });
  await pantMaterial.save();

  const material = Material({
    materialId: pantMaterial._id,
    materialType: "PantMaterial",
  });
  await material.save();

  return { pantMaterial, material };
};
const createJenasMaterial = async (req) => {
  const {
    materialName,
    materialCode,
    materialFabric,
    materialColor,
    materialType,
    materialDescription,
    materialPricePerMeter,
    materialGSM,
    materialProperties,
    materialSeasonability,
    materialPattern,
    weavePattern,
    threadCount,
    tags,
  } = req.body;

  const existingJeansMaterial = await JeansMaterial.findOne({
    $or: [{ materialName }, { materialCode }],
  });

  if (existingJeansMaterial) {
    const field =
      existingJeansMaterial.materialName.toLowerCase() ===
      materialName.toLowerCase()
        ? "Material Name"
        : "Material Code";
    throw new InvalidFieldError(
      "jeans",
      `Jeans ${field} is already taken`,
      403
    );
  }

  const images = [
    ...(req.files?.material?.map((file) => file.path) || []),
    ...(req.files?.materialPreview?.map((file) => file.path) || []),
  ];

  const uploadedFiles = await cloudinary.uploadOnCloudinary(images);
  req.cloudinaryPublicIds = uploadedFiles.map((file) => file.public_id);

  const jeansMaterial = new JeansMaterial({
    materialName,
    materialCode,
    materialFabric,
    materialColor,
    materialType,
    materialDescription,
    materialPricePerMeter,
    materialGSM,
    materialProperties,
    materialSeasonability,
    materialPattern,
    weavePattern,
    threadCount,
    tags,
    materialURL: uploadedFiles[0]?.url || "image",
    materialPreviewURL: uploadedFiles[1]?.url || "preview",
  });
  await jeansMaterial.save();

  const material = Material({
    materialId: jeansMaterial._id,
    materialType: "JeansMaterial",
  });
  await material.save();

  return { jeansMaterial, material };
};
const createChinosMaterial = async (req) => {
  const {
    materialName,
    materialCode,
    materialFabric,
    materialColor,
    materialType,
    materialDescription,
    materialPricePerMeter,
    materialGSM,
    materialProperties,
    materialSeasonability,
    materialPattern,
    weavePattern,
    threadCount,
    tags,
  } = req.body;

  const existingChinosMaterial = await ChinosMaterial.findOne({
    $or: [{ materialName }, { materialCode }],
  });

  if (existingChinosMaterial) {
    const field =
      existingChinosMaterial.materialName.toLowerCase() ===
      materialName.toLowerCase()
        ? "Material Name"
        : "Material Code";
    throw new InvalidFieldError(
      "chinos",
      `Chinos ${field} is already taken`,
      403
    );
  }

  const images = [
    ...(req.files?.material?.map((file) => file.path) || []),
    ...(req.files?.materialPreview?.map((file) => file.path) || []),
  ];

  const uploadedFiles = await cloudinary.uploadOnCloudinary(images);
  req.cloudinaryPublicIds = uploadedFiles.map((file) => file.public_id);

  const chinosMaterial = new ChinosMaterial({
    materialName,
    materialCode,
    materialFabric,
    materialColor,
    materialType,
    materialDescription,
    materialPricePerMeter,
    materialGSM,
    materialProperties,
    materialSeasonability,
    materialPattern,
    weavePattern,
    threadCount,
    tags,
    materialURL: uploadedFiles[0]?.url || "image",
    materialPreviewURL: uploadedFiles[1]?.url || "preview",
  });
  await chinosMaterial.save();

  const material = Material({
    materialId: chinosMaterial._id,
    materialType: "ChinosMaterial",
  });
  await material.save();

  return { chinosMaterial, material };
};

// ********** Single Updation of Material **********

const updateShirtMaterial = async (req) => {
  const materialId = req.params.id;

  const { materialName, materialCode } = req.body;

  const newMaterial = req.body;

  const existingMaterial = await ShirtMaterial.findOne({
    $or: [{ materialName }, { materialCode }],
  });

  if (existingMaterial) {
    const field =
      existingMaterial.materialName.toLowerCase() === materialName.toLowerCase()
        ? "Material Name"
        : "Material Code";
    throw new InvalidFieldError(
      "shirt",
      `Shirt ${field} is already taken`,
      403
    );
  }

  const updatedMaterial = await ShirtMaterial.findByIdAndUpdate(
    materialId,
    {
      $set: newMaterial,
    },
    { new: true }
  );

  return { updatedMaterial };
};
const updatePoloShirtMaterial = async (req) => {
  const materialId = req.params.id;

  const { materialName, materialCode } = req.body;

  const newMaterial = req.body;

  const existingMaterial = await PoloShirtMaterial.findOne({
    $or: [{ materialName }, { materialCode }],
  });

  if (existingMaterial) {
    const field =
      existingMaterial.materialName.toLowerCase() === materialName.toLowerCase()
        ? "Material Name"
        : "Material Code";
    throw new InvalidFieldError(
      "shirt",
      `Shirt ${field} is already taken`,
      403
    );
  }

  const updatedMaterial = await PoloShirtMaterial.findByIdAndUpdate(
    materialId,
    {
      $set: newMaterial,
    },
    { new: true }
  );

  return { updatedMaterial };
};
const updateCoatMaterial = async (req) => {
  const materialId = req.params.id;

  const { materialName, materialCode } = req.body;

  const newMaterial = req.body;

  const existingMaterial = await CoatMaterial.findOne({
    $or: [{ materialName }, { materialCode }],
  });

  if (existingMaterial) {
    const field =
      existingMaterial.materialName.toLowerCase() === materialName.toLowerCase()
        ? "Material Name"
        : "Material Code";
    throw new InvalidFieldError(
      "shirt",
      `Shirt ${field} is already taken`,
      403
    );
  }

  const updatedMaterial = await CoatMaterial.findByIdAndUpdate(
    materialId,
    {
      $set: newMaterial,
    },
    { new: true }
  );

  return { updatedMaterial };
};
const updateOvercoatMaterial = async (req) => {
  const materialId = req.params.id;

  const { materialName, materialCode } = req.body;

  const newMaterial = req.body;

  const existingMaterial = await OvercoatMaterial.findOne({
    $or: [{ materialName }, { materialCode }],
  });

  if (existingMaterial) {
    const field =
      existingMaterial.materialName.toLowerCase() === materialName.toLowerCase()
        ? "Material Name"
        : "Material Code";
    throw new InvalidFieldError(
      "shirt",
      `Shirt ${field} is already taken`,
      403
    );
  }

  const updatedMaterial = await OvercoatMaterial.findByIdAndUpdate(
    materialId,
    {
      $set: newMaterial,
    },
    { new: true }
  );

  return { updatedMaterial };
};
const updatePantMaterial = async (req) => {
  const materialId = req.params.id;

  const { materialName, materialCode } = req.body;

  const newMaterial = req.body;

  const existingMaterial = await PantMaterial.findOne({
    $or: [{ materialName }, { materialCode }],
  });

  if (existingMaterial) {
    const field =
      existingMaterial.materialName.toLowerCase() === materialName.toLowerCase()
        ? "Material Name"
        : "Material Code";
    throw new InvalidFieldError(
      "shirt",
      `Shirt ${field} is already taken`,
      403
    );
  }

  const updatedMaterial = await PantMaterial.findByIdAndUpdate(
    materialId,
    {
      $set: newMaterial,
    },
    { new: true }
  );

  return { updatedMaterial };
};
const updateJeansMaterial = async (req) => {
  const materialId = req.params.id;

  const { materialName, materialCode } = req.body;

  const newMaterial = req.body;

  const existingMaterial = await JeansMaterial.findOne({
    $or: [{ materialName }, { materialCode }],
  });

  if (existingMaterial) {
    const field =
      existingMaterial.materialName.toLowerCase() === materialName.toLowerCase()
        ? "Material Name"
        : "Material Code";
    throw new InvalidFieldError(
      "shirt",
      `Shirt ${field} is already taken`,
      403
    );
  }

  const updatedMaterial = await JeansMaterial.findByIdAndUpdate(
    materialId,
    {
      $set: newMaterial,
    },
    { new: true }
  );

  return { updatedMaterial };
};
const updateChinosMaterial = async (req) => {
  const materialId = req.params.id;

  const { materialName, materialCode } = req.body;

  const newMaterial = req.body;

  const existingMaterial = await ChinosMaterial.findOne({
    $or: [{ materialName }, { materialCode }],
  });

  if (existingMaterial) {
    const field =
      existingMaterial.materialName.toLowerCase() === materialName.toLowerCase()
        ? "Material Name"
        : "Material Code";
    throw new InvalidFieldError(
      "shirt",
      `Shirt ${field} is already taken`,
      403
    );
  }

  const updatedMaterial = await ChinosMaterial.findByIdAndUpdate(
    materialId,
    {
      $set: newMaterial,
    },
    { new: true }
  );

  return { updatedMaterial };
};

// ********** Single Deletion of Materials **********

const deleteShirtMaterial = async (req) => {
  const materialId = req.params.id;

  const material = await Material.findOne({ materialId });

  await Material.findByIdAndDelete(material._id);

  const deletedShirtMaterial = await ShirtMaterial.findByIdAndDelete(
    materialId
  );

  return { deletedShirtMaterial };
};
const deletePoloShirtMaterial = async (req) => {
  const materialId = req.params.id;

  const material = await Material.findOne({ materialId });

  await Material.findByIdAndDelete(material._id);

  const deletedPoloShirtMaterial = await PoloShirtMaterial.findByIdAndDelete(
    materialId
  );

  return { deletedPoloShirtMaterial };
};
const deleteCoatMaterial = async (req) => {
  const materialId = req.params.id;

  const material = await Material.findOne({ materialId });

  await Material.findByIdAndDelete(material._id);

  const deletedCoatMaterial = await CoatMaterial.findByIdAndDelete(materialId);

  return { deletedCoatMaterial };
};
const deleteOvercoatMaterial = async (req) => {
  const materialId = req.params.id;

  const material = await Material.findOne({ materialId });

  await Material.findByIdAndDelete(material._id);

  const deletedOvercoatMaterial = await OvercoatMaterial.findByIdAndDelete(
    materialId
  );

  return { deletedOvercoatMaterial };
};
const deletePantMaterial = async (req) => {
  const materialId = req.params.id;

  const material = await Material.findOne({ materialId });

  await Material.findByIdAndDelete(material._id);

  const deletedPantMaterial = await PantMaterial.findByIdAndDelete(materialId);

  return { deletedPantMaterial };
};
const deleteJeansMaterial = async (req) => {
  const materialId = req.params.id;

  const material = await Material.findOne({ materialId });

  await Material.findByIdAndDelete(material._id);

  const deletedJeansMaterial = await JeansMaterial.findByIdAndDelete(
    materialId
  );

  return { deletedJeansMaterial };
};
const deleteChinosMaterial = async (req) => {
  const materialId = req.params.id;

  const material = await Material.findOne({ materialId });

  await Material.findByIdAndDelete(material._id);

  const deletedChinosMaterial = await ChinosMaterial.findByIdAndDelete(
    materialId
  );

  return { deletedChinosMaterial };
};

// ********** Bulk Creation of Materials **********

const createBulkShirtsMaterials = async (req) => {
  const { materials, images } = req.body;

  if (materials.length !== images.length) {
    throw new AppError("Materials Length And Images Length must be Equal", 403);
  }

  let finalMaterilas = [];

  for (let index = 0; index < materials.length; index++) {
    const materialNameWithIndex = materials[index].materialName + " " + index;
    const materialCodeWithIndex = materials[index].materialCode + index;
    const existingShirtMaterial = await ShirtMaterial.findOne({
      $or: [
        { materialName: materialNameWithIndex },
        { materialCode: materialCodeWithIndex },
      ],
    });

    if (existingShirtMaterial) {
      const field =
        existingShirtMaterial.materialName.toLowerCase() ===
        materialNameWithIndex.toLowerCase()
          ? "Material Name"
          : "Material Code";
      throw new InvalidFieldError(
        "shirt",
        `Shirt ${field} is already taken`,
        403
      );
    }

    const shirtMaterial = new ShirtMaterial({
      materialName: materialNameWithIndex,
      materialCode: materialCodeWithIndex,
      materialFabric: materials[index].materialFabric,
      materialColor: materials[index].materialColor,
      materialType: materials[index].materialType,
      materialDescription: materials[index].materialDescription,
      materialPricePerMeter: materials[index].materialPricePerMeter,
      materialGSM: materials[index].materialGSM,
      materialProperties: materials[index].materialProperties,
      materialSeasonability: materials[index].materialSeasonability,
      materialPattern: materials[index].materialName,
      weavePattern: materials[index].materialPattern,
      threadCount: materials[index].threadCount,
      tags: materials[index].tags,
      materialURL: images[index].image,
      materialPreviewURL: images[index].imagePreview,
    });
    await shirtMaterial.save();

    const material = Material({
      materialId: shirtMaterial._id,
      materialType: "ShirtMaterial",
    });
    await material.save();
    finalMaterilas.push(shirtMaterial);
  }
  return { finalMaterilas };
};
const createBulkPoloShirtsMaterials = async (req) => {
  const { materials, images } = req.body;

  if (materials.length !== images.length) {
    throw new AppError("Materials Length And Images Length must be Equal", 403);
  }

  let finalMaterilas = [];

  for (let index = 0; index < materials.length; index++) {
    const materialNameWithIndex = materials[index].materialName + " " + index;
    const materialCodeWithIndex = materials[index].materialCode + index;
    const existingPoloShirtMaterial = await PoloShirtMaterial.findOne({
      $or: [
        { materialName: materialNameWithIndex },
        { materialCode: materialCodeWithIndex },
      ],
    });

    if (existingPoloShirtMaterial) {
      const field =
        existingPoloShirtMaterial.materialName.toLowerCase() ===
        materialNameWithIndex.toLowerCase()
          ? "Material Name"
          : "Material Code";
      throw new InvalidFieldError(
        "poloShirt",
        `Polo Shirt ${field} is already taken`,
        403
      );
    }

    const poloShirtMaterial = new PoloShirtMaterial({
      materialName: materialNameWithIndex,
      materialCode: materialCodeWithIndex,
      materialFabric: materials[index].materialFabric,
      materialColor: materials[index].materialColor,
      materialType: materials[index].materialType,
      materialDescription: materials[index].materialDescription,
      materialPricePerMeter: materials[index].materialPricePerMeter,
      materialGSM: materials[index].materialGSM,
      materialProperties: materials[index].materialProperties,
      materialSeasonability: materials[index].materialSeasonability,
      materialPattern: materials[index].materialName,
      weavePattern: materials[index].materialPattern,
      threadCount: materials[index].threadCount,
      tags: materials[index].tags,
      materialURL: images[index].image,
      materialPreviewURL: images[index].imagePreview,
    });
    await poloShirtMaterial.save();

    const material = Material({
      materialId: poloShirtMaterial._id,
      materialType: "PoloShirtMaterial",
    });
    await material.save();
    finalMaterilas.push(poloShirtMaterial);
  }
  return { finalMaterilas };
};
const createBulkCoatsMaterials = async (req) => {
  const { materials, images } = req.body;

  if (materials.length !== images.length) {
    throw new AppError("Materials Length And Images Length must be Equal", 403);
  }

  let finalMaterilas = [];

  for (let index = 0; index < materials.length; index++) {
    const materialNameWithIndex = materials[index].materialName + " " + index;
    const materialCodeWithIndex = materials[index].materialCode + index;
    const existingCoatMaterial = await CoatMaterial.findOne({
      $or: [
        { materialName: materialNameWithIndex },
        { materialCode: materialCodeWithIndex },
      ],
    });

    if (existingCoatMaterial) {
      const field =
        existingCoatMaterial.materialName.toLowerCase() ===
        materialNameWithIndex.toLowerCase()
          ? "Material Name"
          : "Material Code";
      throw new InvalidFieldError(
        "coat",
        `Coat ${field} is already taken`,
        403
      );
    }

    const coatMaterial = new CoatMaterial({
      materialName: materialNameWithIndex,
      materialCode: materialCodeWithIndex,
      materialFabric: materials[index].materialFabric,
      materialColor: materials[index].materialColor,
      materialType: materials[index].materialType,
      materialDescription: materials[index].materialDescription,
      materialPricePerMeter: materials[index].materialPricePerMeter,
      materialGSM: materials[index].materialGSM,
      materialProperties: materials[index].materialProperties,
      materialSeasonability: materials[index].materialSeasonability,
      materialPattern: materials[index].materialName,
      weavePattern: materials[index].materialPattern,
      threadCount: materials[index].threadCount,
      tags: materials[index].tags,
      materialURL: images[index].image,
      materialPreviewURL: images[index].imagePreview,
    });
    await coatMaterial.save();

    const material = Material({
      materialId: coatMaterial._id,
      materialType: "CoatMaterial",
    });
    await material.save();
    finalMaterilas.push(coatMaterial);
  }
  return { finalMaterilas };
};
const createBulkOvercoatsMaterials = async (req) => {
  const { materials, images } = req.body;

  if (materials.length !== images.length) {
    throw new AppError("Materials Length And Images Length must be Equal", 403);
  }

  let finalMaterilas = [];

  for (let index = 0; index < materials.length; index++) {
    const materialNameWithIndex = materials[index].materialName + " " + index;
    const materialCodeWithIndex = materials[index].materialCode + index;
    const existingOvercoatMaterial = await OvercoatMaterial.findOne({
      $or: [
        { materialName: materialNameWithIndex },
        { materialCode: materialCodeWithIndex },
      ],
    });

    if (existingOvercoatMaterial) {
      const field =
        existingOvercoatMaterial.materialName.toLowerCase() ===
        materialNameWithIndex.toLowerCase()
          ? "Material Name"
          : "Material Code";
      throw new InvalidFieldError(
        "overcoat",
        `Overcoat ${field} is already taken`,
        403
      );
    }

    const overcoatMaterial = new OvercoatMaterial({
      materialName: materialNameWithIndex,
      materialCode: materialCodeWithIndex,
      materialFabric: materials[index].materialFabric,
      materialColor: materials[index].materialColor,
      materialType: materials[index].materialType,
      materialDescription: materials[index].materialDescription,
      materialPricePerMeter: materials[index].materialPricePerMeter,
      materialGSM: materials[index].materialGSM,
      materialProperties: materials[index].materialProperties,
      materialSeasonability: materials[index].materialSeasonability,
      materialPattern: materials[index].materialName,
      weavePattern: materials[index].materialPattern,
      threadCount: materials[index].threadCount,
      tags: materials[index].tags,
      materialURL: images[index].image,
      materialPreviewURL: images[index].imagePreview,
    });
    await overcoatMaterial.save();

    const material = Material({
      materialId: overcoatMaterial._id,
      materialType: "OvercoatMaterial",
    });
    await material.save();
    finalMaterilas.push(overcoatMaterial);
  }
  return { finalMaterilas };
};
const createBulkPantsMaterials = async (req) => {
  const { materials, images } = req.body;

  if (materials.length !== images.length) {
    throw new AppError("Materials Length And Images Length must be Equal", 403);
  }

  let finalMaterilas = [];

  for (let index = 0; index < materials.length; index++) {
    const materialNameWithIndex = materials[index].materialName + " " + index;
    const materialCodeWithIndex = materials[index].materialCode + index;
    const existingPantMaterial = await PantMaterial.findOne({
      $or: [
        { materialName: materialNameWithIndex },
        { materialCode: materialCodeWithIndex },
      ],
    });

    if (existingPantMaterial) {
      const field =
        existingPantMaterial.materialName.toLowerCase() ===
        materialNameWithIndex.toLowerCase()
          ? "Material Name"
          : "Material Code";
      throw new InvalidFieldError(
        "pant",
        `Pant ${field} is already taken`,
        403
      );
    }

    const pantMaterial = new PantMaterial({
      materialName: materialNameWithIndex,
      materialCode: materialCodeWithIndex,
      materialFabric: materials[index].materialFabric,
      materialColor: materials[index].materialColor,
      materialType: materials[index].materialType,
      materialDescription: materials[index].materialDescription,
      materialPricePerMeter: materials[index].materialPricePerMeter,
      materialGSM: materials[index].materialGSM,
      materialProperties: materials[index].materialProperties,
      materialSeasonability: materials[index].materialSeasonability,
      materialPattern: materials[index].materialName,
      weavePattern: materials[index].materialPattern,
      threadCount: materials[index].threadCount,
      tags: materials[index].tags,
      materialURL: images[index].image,
      materialPreviewURL: images[index].imagePreview,
    });
    await pantMaterial.save();

    const material = Material({
      materialId: pantMaterial._id,
      materialType: "PantMaterial",
    });
    await material.save();
    finalMaterilas.push(pantMaterial);
  }
  return { finalMaterilas };
};
const createBulkJeansMaterials = async (req) => {
  const { materials, images } = req.body;

  if (materials.length !== images.length) {
    throw new AppError("Materials Length And Images Length must be Equal", 403);
  }

  let finalMaterilas = [];

  for (let index = 0; index < materials.length; index++) {
    const materialNameWithIndex = materials[index].materialName + " " + index;
    const materialCodeWithIndex = materials[index].materialCode + index;
    const existingJeansMaterial = await JeansMaterial.findOne({
      $or: [
        { materialName: materialNameWithIndex },
        { materialCode: materialCodeWithIndex },
      ],
    });

    if (existingJeansMaterial) {
      const field =
        existingJeansMaterial.materialName.toLowerCase() ===
        materialNameWithIndex.toLowerCase()
          ? "Material Name"
          : "Material Code";
      throw new InvalidFieldError(
        "jeans",
        `Jeans ${field} is already taken`,
        403
      );
    }

    const jeansMaterial = new JeansMaterial({
      materialName: materialNameWithIndex,
      materialCode: materialCodeWithIndex,
      materialFabric: materials[index].materialFabric,
      materialColor: materials[index].materialColor,
      materialType: materials[index].materialType,
      materialDescription: materials[index].materialDescription,
      materialPricePerMeter: materials[index].materialPricePerMeter,
      materialGSM: materials[index].materialGSM,
      materialProperties: materials[index].materialProperties,
      materialSeasonability: materials[index].materialSeasonability,
      materialPattern: materials[index].materialName,
      weavePattern: materials[index].materialPattern,
      threadCount: materials[index].threadCount,
      tags: materials[index].tags,
      materialURL: images[index].image,
      materialPreviewURL: images[index].imagePreview,
    });
    await jeansMaterial.save();

    const material = Material({
      materialId: jeansMaterial._id,
      materialType: "JeansMaterial",
    });
    await material.save();
    finalMaterilas.push(jeansMaterial);
  }
  return { finalMaterilas };
};
const createBulkChinosMaterials = async (req) => {
  const { materials, images } = req.body;

  if (materials.length !== images.length) {
    throw new AppError("Materials Length And Images Length must be Equal", 403);
  }

  let finalMaterilas = [];

  for (let index = 0; index < materials.length; index++) {
    const materialNameWithIndex = materials[index].materialName + " " + index;
    const materialCodeWithIndex = materials[index].materialCode + index;
    const existingChinosMaterial = await ChinosMaterial.findOne({
      $or: [
        { materialName: materialNameWithIndex },
        { materialCode: materialCodeWithIndex },
      ],
    });

    if (existingChinosMaterial) {
      const field =
        existingChinosMaterial.materialName.toLowerCase() ===
        materialNameWithIndex.toLowerCase()
          ? "Material Name"
          : "Material Code";
      throw new InvalidFieldError(
        "chinos",
        `Chinos ${field} is already taken`,
        403
      );
    }

    const chinosMaterial = new ChinosMaterial({
      materialName: materialNameWithIndex,
      materialCode: materialCodeWithIndex,
      materialFabric: materials[index].materialFabric,
      materialColor: materials[index].materialColor,
      materialType: materials[index].materialType,
      materialDescription: materials[index].materialDescription,
      materialPricePerMeter: materials[index].materialPricePerMeter,
      materialGSM: materials[index].materialGSM,
      materialProperties: materials[index].materialProperties,
      materialSeasonability: materials[index].materialSeasonability,
      materialPattern: materials[index].materialName,
      weavePattern: materials[index].materialPattern,
      threadCount: materials[index].threadCount,
      tags: materials[index].tags,
      materialURL: images[index].image,
      materialPreviewURL: images[index].imagePreview,
    });
    await chinosMaterial.save();

    const material = Material({
      materialId: chinosMaterial._id,
      materialType: "ChinosMaterial",
    });
    await material.save();
    finalMaterilas.push(chinosMaterial);
  }
  return { finalMaterilas };
};

module.exports = {
  getMaterials,
  getShirtsMaterials,
  getPoloShirtsMaterials,
  getCoatsMaterials,
  getOvercoatsMaterials,
  getPantsMaterials,
  getJeansMaterials,
  getChinosMaterials,

  createShirtMaterial,
  createPoloShirtMaterial,
  createCoatMaterial,
  createOvercoatMaterial,
  createPantMaterial,
  createJenasMaterial,
  createChinosMaterial,

  updateShirtMaterial,
  updatePoloShirtMaterial,
  updateCoatMaterial,
  updateOvercoatMaterial,
  updatePantMaterial,
  updateJeansMaterial,
  updateChinosMaterial,

  deleteShirtMaterial,
  deletePoloShirtMaterial,
  deleteCoatMaterial,
  deleteOvercoatMaterial,
  deletePantMaterial,
  deleteJeansMaterial,
  deleteChinosMaterial,

  createBulkShirtsMaterials,
  createBulkPoloShirtsMaterials,
  createBulkCoatsMaterials,
  createBulkOvercoatsMaterials,
  createBulkPantsMaterials,
  createBulkJeansMaterials,
  createBulkChinosMaterials,
};
