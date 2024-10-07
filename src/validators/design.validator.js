// validators/design.validator.js
const Joi = require("joi");

const shirtDesignValidator = Joi.object({
  backCut: Joi.string()
    .valid(
      "sideDartsBackCut",
      "sideFoldsBackCut",
      "standardBackCut",
      "classicBackYoke",
      "classicSplitBackYoke"
    )
    .required()
    .messages({
      "string.empty": "Back Cut is required.",
      "any.required": "Back Cut is required.",
      "any.allowOnly": "Back Cut must be one of the allowed values.",
    }),
  backYoke: Joi.string()
    .valid("classicBackYoke", "classicSplitBackYoke")
    .required()
    .messages({
      "string.empty": "Back Yoke is required.",
      "any.required": "Back Yoke is required.",
      "any.allowOnly": "Back Yoke must be one of the allowed values.",
    }),
  button: Joi.string()
    .valid(
      "bluePolyesterButton",
      "darkShellButton",
      "lightBluePolyesterButton",
      "whiteShellButton"
    )
    .required()
    .messages({
      "string.empty": "Button is required.",
      "any.required": "Button is required.",
      "any.allowOnly": "Button must be one of the allowed values.",
    }),
  collor: Joi.string()
    .valid(
      "cutawayCollar",
      "fullSpreadCollar",
      "kentCollar",
      "semiSpreadCollar"
    )
    .required()
    .messages({
      "string.empty": "Collar is required.",
      "any.required": "Collar is required.",
      "any.allowOnly": "Collar must be one of the allowed values.",
    }),
  cuffCorner: Joi.string()
    .valid("beveledCornerCuff", "roundedCornerCuff", "straightCornerCuff")
    .required()
    .messages({
      "string.empty": "Cuff Corner is required.",
      "any.required": "Cuff Corner is required.",
      "any.allowOnly": "Cuff Corner must be one of the allowed values.",
    }),
  cuff: Joi.string()
    .valid(
      "convertibleButtonCuff",
      "doubleButtonCuff",
      "frenchButtonCuff",
      "singleButtonCuff"
    )
    .required()
    .messages({
      "string.empty": "Cuff is required.",
      "any.required": "Cuff is required.",
      "any.allowOnly": "Cuff must be one of the allowed values.",
    }),
  fastening: Joi.string()
    .valid(
      "hiddenButtonFastening",
      "withPlacketFastening",
      "withoutPlacketFastening"
    )
    .required()
    .messages({
      "string.empty": "Fastening is required.",
      "any.required": "Fastening is required.",
      "any.allowOnly": "Fastening must be one of the allowed values.",
    }),
  pocket: Joi.string()
    .valid("leftPocket", "nonePocket", "rightPocket", "twoPocket")
    .required()
    .messages({
      "string.empty": "Pocket is required.",
      "any.required": "Pocket is required.",
      "any.allowOnly": "Pocket must be one of the allowed values.",
    }),
  sleeve: Joi.string().valid("longSleeve", "shortSleeve").required().messages({
    "string.empty": "Sleeve is required.",
    "any.required": "Sleeve is required.",
    "any.allowOnly": "Sleeve must be one of the allowed values.",
  }),
});
const poloShirtDesignValidator = Joi.object({
  collar: Joi.string()
    .valid("defaultCollar", "placketCollar", "plainColorCollar")
    .required()
    .messages({
      "string.empty": "Collar is required.",
      "any.required": "Collar is required.",
      "any.allowOnly": "Collar must be one of the allowed values.",
    }),
  pocket: Joi.string().valid("nonePocket", "onePocket").required().messages({
    "string.empty": "Pocket is required.",
    "any.required": "Pocket is required.",
    "any.allowOnly": "Pocket must be one of the allowed values.",
  }),
  sleeve: Joi.string().valid("fullSleeve", "halfSleeve").required().messages({
    "string.empty": "Sleeve is required.",
    "any.required": "Sleeve is required.",
    "any.allowOnly": "Sleeve must be one of the allowed values.",
  }),
});
const coatDesignValidator = Joi.object({
  lapelButtonHole: Joi.string()
    .valid("decorativeLapelButtonHole", "workingLapelButtonHole")
    .required()
    .messages({
      "string.empty": "Lapel Button Hole is required.",
      "any.required": "Lapel Button Hole is required.",
      "any.allowOnly": "Lapel Button Hole must be one of the allowed values.",
    }),
  lapelStyle: Joi.string()
    .valid("notchLapelStyle", "peakLapelStyle", "shawlLapelStyle")
    .required()
    .messages({
      "string.empty": "Lapel Style is required.",
      "any.required": "Lapel Style is required.",
      "any.allowOnly": "Lapel Style must be one of the allowed values.",
    }),
  lapelWidth: Joi.string()
    .valid("slimTwoPointFiveInchLapelWidth", "standardThreeInchLapelWidth")
    .required()
    .messages({
      "string.empty": "Lapel Width is required.",
      "any.required": "Lapel Width is required.",
      "any.allowOnly": "Lapel Width must be one of the allowed values.",
    }),
  pocketStyle: Joi.string()
    .valid(
      "slantedFlappePocketStyle",
      "slantedPipedPocketStyle",
      "straightFlappedPocketStyle",
      "straightPipedPocketStyle"
    )
    .required()
    .messages({
      "string.empty": "Pocket Style is required.",
      "any.required": "Pocket Style is required.",
      "any.allowOnly": "Pocket Style must be one of the allowed values.",
    }),
  sleeveButtonNumber: Joi.string()
    .valid("fourSleeveButtonNumber", "threeSleeveButtonNumber")
    .required()
    .messages({
      "string.empty": "Sleeve Button Number is required.",
      "any.required": "Sleeve Button Number is required.",
      "any.allowOnly":
        "Sleeve Button Number must be one of the allowed values.",
    }),
  sleeveButton: Joi.string()
    .valid(
      "kissingNoneWorkingSleeveButton",
      "kissingWorkingSleeveButton",
      "standardNoneWorkingSleeveButton",
      "standardWorkingSleeveButton"
    )
    .required()
    .messages({
      "string.empty": "Sleeve Button is required.",
      "any.required": "Sleeve Button is required.",
      "any.allowOnly": "Sleeve Button must be one of the allowed values.",
    }),
  style: Joi.string()
    .valid(
      "doubleBreastedWithTwoButtonStyle",
      "singleBreastedWithOneButtonStyle",
      "singleBreastedWithThreeButtonStyle",
      "singleBreastedWithTwoButtonStyle"
    )
    .required()
    .messages({
      "string.empty": "Style is required.",
      "any.required": "Style is required.",
      "any.allowOnly": "Style must be one of the allowed values.",
    }),
  ticketPocket: Joi.string()
    .valid("withTicketPocket", "withoutTicketPocket")
    .required()
    .messages({
      "string.empty": "Ticket Pocket is required.",
      "any.required": "Ticket Pocket is required.",
      "any.allowOnly": "Ticket Pocket must be one of the allowed values.",
    }),
});
const overcoatDesignValidator = Joi.object({
  lapelButtonHole: Joi.string()
    .valid("decorativeLapelButtonHole", "workingLapelButtonHole")
    .required()
    .messages({
      "string.empty": "Lapel Button Hole is required.",
      "any.required": "Lapel Button Hole is required.",
      "any.allowOnly": "Lapel Button Hole must be one of the allowed values.",
    }),
  lapelStyle: Joi.string()
    .valid("notchLapelStyle", "peakLapelStyle", "shawlLapelStyle")
    .required()
    .messages({
      "string.empty": "Lapel Style is required.",
      "any.required": "Lapel Style is required.",
      "any.allowOnly": "Lapel Style must be one of the allowed values.",
    }),
  lapelWidth: Joi.string()
    .valid("slimTwoPointFiveInchLapelWidth", "standardThreeInchLapelWidth")
    .required()
    .messages({
      "string.empty": "Lapel Width is required.",
      "any.required": "Lapel Width is required.",
      "any.allowOnly": "Lapel Width must be one of the allowed values.",
    }),
  pocketStyle: Joi.string()
    .valid(
      "slantedFlappePocketStyle",
      "slantedPipedPocketStyle",
      "straightFlappedPocketStyle",
      "straightPipedPocketStyle"
    )
    .required()
    .messages({
      "string.empty": "Pocket Style is required.",
      "any.required": "Pocket Style is required.",
      "any.allowOnly": "Pocket Style must be one of the allowed values.",
    }),
  sleeveButtonNumber: Joi.string()
    .valid("fourSleeveButtonNumber", "threeSleeveButtonNumber")
    .required()
    .messages({
      "string.empty": "Sleeve Button Number is required.",
      "any.required": "Sleeve Button Number is required.",
      "any.allowOnly":
        "Sleeve Button Number must be one of the allowed values.",
    }),
  sleeveButton: Joi.string()
    .valid(
      "kissingNoneWorkingSleeveButton",
      "kissingWorkingSleeveButton",
      "standardNoneWorkingSleeveButton",
      "standardWorkingSleeveButton"
    )
    .required()
    .messages({
      "string.empty": "Sleeve Button is required.",
      "any.required": "Sleeve Button is required.",
      "any.allowOnly": "Sleeve Button must be one of the allowed values.",
    }),
  style: Joi.string()
    .valid(
      "doubleBreastedWithTwoButtonStyle",
      "singleBreastedWithOneButtonStyle",
      "singleBreastedWithThreeButtonStyle",
      "singleBreastedWithTwoButtonStyle"
    )
    .required()
    .messages({
      "string.empty": "Style is required.",
      "any.required": "Style is required.",
      "any.allowOnly": "Style must be one of the allowed values.",
    }),
  ticketPocket: Joi.string()
    .valid("withTicketPocket", "withoutTicketPocket")
    .required()
    .messages({
      "string.empty": "Ticket Pocket is required.",
      "any.required": "Ticket Pocket is required.",
      "any.allowOnly": "Ticket Pocket must be one of the allowed values.",
    }),
});
const pantDesignValidator = Joi.object({
  backPockets: Joi.string()
    .valid("bothBackPocket", "leftBackPocket", "rightBackPocket")
    .required()
    .messages({
      "string.empty": "Back Pockets is required.",
      "any.required": "Back Pockets is required.",
      "any.allowOnly": "Back Pockets must be one of the allowed values.",
    }),
  beltLoops: Joi.string()
    .valid("withoutBeltLoop", "withBeltLoop")
    .required()
    .messages({
      "string.empty": "Belt Loops is required.",
      "any.required": "Belt Loops is required.",
      "any.allowOnly": "Belt Loops must be one of the allowed values.",
    }),
  buttons: Joi.string()
    .valid(
      "beigeCorozoButton",
      "blueCorozoButton",
      "blackCorozoButton",
      "brownCorozoButton",
      "matchingCorozoButton"
    )
    .required()
    .messages({
      "string.empty": "Buttons is required.",
      "any.required": "Buttons is required.",
      "any.allowOnly": "Buttons must be one of the allowed values.",
    }),
  cuffs: Joi.string()
    .valid("withOnePointFiveCuff", "withOnePointTwoFiveCuff", "withoutCuff")
    .required()
    .messages({
      "string.empty": "Cuffs is required.",
      "any.required": "Cuffs is required.",
      "any.allowOnly": "Cuffs must be one of the allowed values.",
    }),
  frontClosures: Joi.string()
    .valid(
      "buttonOnlyFrontClosure",
      "clipAndButtonFrontClosure",
      "clipOnlyFrontClosure"
    )
    .required()
    .messages({
      "string.empty": "Front Closures is required.",
      "any.required": "Front Closures is required.",
      "any.allowOnly": "Front Closures must be one of the allowed values.",
    }),
  frontPockets: Joi.string()
    .valid("noneFrontPocket", "seamFrontPocket", "standardFrontPocket")
    .required()
    .messages({
      "string.empty": "Front Pockets is required.",
      "any.required": "Front Pockets is required.",
      "any.allowOnly": "Front Pockets must be one of the allowed values.",
    }),
  pleats: Joi.string()
    .valid("doublePleat", "singlePleat", "withoutPleat")
    .required()
    .messages({
      "string.empty": "Pleats is required.",
      "any.required": "Pleats is required.",
      "any.allowOnly": "Pleats must be one of the allowed values.",
    }),
  pocketButtons: Joi.string()
    .valid("withPocketButton", "withoutPocketButton")
    .required()
    .messages({
      "string.empty": "Pocket Buttons is required.",
      "any.required": "Pocket Buttons is required.",
      "any.allowOnly": "Pocket Buttons must be one of the allowed values.",
    }),
});
const jeansDesignValidator = Joi.object({
  backPocket: Joi.string()
    .valid(
      "classicBackPocket",
      "roundBackPocket",
      "squareBackPocket",
      "unbrandBackPocket"
    )
    .required()
    .messages({
      "string.empty": "Back Pocket is required.",
      "any.required": "Back Pocket is required.",
      "any.allowOnly": "Back Pocket must be one of the allowed values.",
    }),
  cuff: Joi.string().valid("classicCuff", "rolledUpCuff").required().messages({
    "string.empty": "Cuff is required.",
    "any.required": "Cuff is required.",
    "any.allowOnly": "Cuff must be one of the allowed values.",
  }),
  finishing: Joi.string()
    .valid("classicFinishing", "cleanFinishing", "vintageFinishing")
    .required()
    .messages({
      "string.empty": "Finishing is required.",
      "any.required": "Finishing is required.",
      "any.allowOnly": "Finishing must be one of the allowed values.",
    }),
  fit: Joi.string()
    .valid("bootcutFit", "skinnyFit", "straightFit", "slimFit")
    .required()
    .messages({
      "string.empty": "Fit is required.",
      "any.required": "Fit is required.",
      "any.allowOnly": "Fit must be one of the allowed values.",
    }),
  fly: Joi.string().valid("buttonFly", "zipperFly").required().messages({
    "string.empty": "Fly is required.",
    "any.required": "Fly is required.",
    "any.allowOnly": "Fly must be one of the allowed values.",
  }),
  frontPocket: Joi.string()
    .valid("classicFrontPocket", "workerFrontPocket")
    .required()
    .messages({
      "string.empty": "Front Pocket is required.",
      "any.required": "Front Pocket is required.",
      "any.allowOnly": "Front Pocket must be one of the allowed values.",
    }),
  length: Joi.string()
    .valid("classicLength", "cropLength")
    .required()
    .messages({
      "string.empty": "Length is required.",
      "any.required": "Length is required.",
      "any.allowOnly": "Length must be one of the allowed values.",
    }),
});
const chinosDesignValidator = Joi.object({
  backPocket: Joi.string()
    .valid("classicBackPocket", "patchBackPocket", "weltBackPocket")
    .required()
    .messages({
      "string.empty": "Back Pocket is required.",
      "any.required": "Back Pocket is required.",
      "any.allowOnly": "Back Pocket must be one of the allowed values.",
    }),
  cargoPocket: Joi.string()
    .valid("noneCargoPocket", "withCargoPocket")
    .required()
    .messages({
      "string.empty": "Cargo Pocket is required.",
      "any.required": "Cargo Pocket is required.",
      "any.allowOnly": "Cargo Pocket must be one of the allowed values.",
    }),
  fastening: Joi.string()
    .valid("classicFastening", "drawstringFastening", "offCenterFastening")
    .required()
    .messages({
      "string.empty": "Fastening is required.",
      "any.required": "Fastening is required.",
      "any.allowOnly": "Fastening must be one of the allowed values.",
    }),
  fit: Joi.string()
    .valid("classicFit", "relaxedFit", "taperedFit")
    .required()
    .messages({
      "string.empty": "Fit is required.",
      "any.required": "Fit is required.",
      "any.allowOnly": "Fit must be one of the allowed values.",
    }),
  frontPocket: Joi.string()
    .valid("scoopFrontPocket", "slantFrontPocket")
    .required()
    .messages({
      "string.empty": "Front Pocket is required.",
      "any.required": "Front Pocket is required.",
      "any.allowOnly": "Front Pocket must be one of the allowed values.",
    }),
  hemline: Joi.string()
    .valid("classicHemline", "rollUpHemline")
    .required()
    .messages({
      "string.empty": "Hemline is required.",
      "any.required": "Hemline is required.",
      "any.allowOnly": "Hemline must be one of the allowed values.",
    }),
  length: Joi.string()
    .valid("ankleLength", "bermudaLength", "classicLength")
    .required()
    .messages({
      "string.empty": "Length is required.",
      "any.required": "Length is required.",
      "any.allowOnly": "Length must be one of the allowed values.",
    }),
  pleat: Joi.string().valid("nonePleat", "withPleat").required().messages({
    "string.empty": "Pleat is required.",
    "any.required": "Pleat is required.",
    "any.allowOnly": "Pleat must be one of the allowed values.",
  }),
});

const designValidator = {
  shirtDesignValidator,
  poloShirtDesignValidator,
  coatDesignValidator,
  overcoatDesignValidator,
  pantDesignValidator,
  jeansDesignValidator,
  chinosDesignValidator,
};

module.exports = designValidator;
