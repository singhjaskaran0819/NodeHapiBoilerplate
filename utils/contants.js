'use strict';

let constants = {};

constants.statusCode = {
  MONGOEXPECTION: 100,
  MISSCELANEOUSAPI: 200,
  NOTFOUND: 404,
  USERALREADYEXISTS: 405,
  BADREQUEST: 400
};

constants.SENDINBLUE = {
  EMAILFORSENDINGEMAIL: ['shyam@northstaredpartners.com'],
  SUBJECTOFEMAIL: 'Password reset OTP',
  RESETLINK_SUBJECT_EMAIL: 'Password reset'
  //["rajan@chicmic.co.in","rajanprajapati@gmail.com"]
};

constants.EMAILPATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

constants.jwt = {
  'privatekey': 'asdfasfasdfas234283492837492dfvslkd'
};

constants.MESSAGES = {
  MONGOERROR: 'Database error',
  USERALREADYEXISTS: 'Email already registered! Please enter another email.',
  USERNOTFOUND: 'Invalid email. Please signup first.',
  SUCCESSFULLYLOGGEDIN: 'You are successfully logged in.',
  NOMANAGERFOUND: 'No manager found!',
  NOEMPLOYEEFOUND: 'No employee found.',
  FEEDBACKSUCCESSFULLYREQUESTED: 'Feedback requested successfully.',
  MANAGERIDNOTINREQUEST: 'Please add manager ID in request.',
  FEEDBACKSUCCESSFULLYSENT: 'Feedback sent successfully.',
  FEEDBACKALREADYANSWERED: 'This feedback has been already answered.',
  COMPETENCYERROR: 'Invalid value for competency.',
  WRONGPASSWORD: 'Wrong password.',
  MANAGERTRANSPARENCYREQUIRED: 'Manager transparency field is required.',
  PROFILESUCCESSFULLYUPDATED: 'Profile updated successfully.',
  MANAGERTRANSPARENCYNOTREQUIRED: 'Please remove manager transparency field from request.',
  NOFEEDBACKISGIVEN: 'No feedback found.',
  BAD_TOKEN: 'Token has been expired. Please request for a new one.',
  SUCCESSFULLYUPDDATEDCOUNT: 'Count updated successfully.',
  OTPSENTTOEMAIL: 'OTP sent to your email.',
  LINKSENT: 'Reset link sent to your email.',
  EMAILNOTFOUND: 'Email not found.',
  EMAILIDINVALID: 'Invalid email pattern.',
  OTPVERIFIED: 'OTP verified successfully.',
  OTPEXPIRED: 'OTP expired! Press resend OTP.',
  INVALIDOTP: 'Invalid OTP.',
  PASSWORDCHANGED: 'Password changed successfully.',
  BADGESUCCESSFULLYAWARDED: 'Badge awarded successfully.',
  FEEDBACKALREADYAWARDED: 'This feedback has been already awarded.',
  FEEDBACKALREADYQUESTIONED: 'This feedback has been already questioned.',
  FEEDBACKSUCCESSFULLYQUESTIONED: 'Feedback questioned successfully.',
  QUESTIONALREADYANSWERED: 'This question has been already answered.',
  REPLYSUCCESSFULLYSENT: 'Reply successfully sent.',
  INVALIDFILTERVALUE: 'Invalid filter type.',
  INVALIDREQUESTFORGETFEEDBACKS: 'Invalid request. Please enter only one ID.',
  INVALIDREQUEST: 'Invalid request.',
  SUCCESSFULLYLOGGEDOUT: 'You are successfully logged out.',
  FEEDBACKALREADYLIKED: 'This feedback has been already liked.',
  FEEDBACKSUCCESSFULLYLIKED: 'Feedback successfully liked.'
};

constants.COMPETENCYLIST = [{
  title: 'STRATEGIC MANAGEMENT', data: ['Strategic thinking', 'Problem solving', 'Decision making', 'Change leadership', 'Project management', 'K-12 systems thinking', 'Business and operations expertise']
}, {
  title: 'EFFECTIVE TEAMING', data: ['Trust and collaboration', 'Communication and influence', 'Developing others', 'Cultural competence', 'Conflict resolution']
}, {
  title: 'SELF MANAGEMENT', data: ['Growth mindset', 'Empathy', 'Motivation and courage', 'Openness to change']
}];

constants.FEEDBACKTYPE = {
  REQUEST: 1,
  RESPONSE: 2,
  ANSWERED: 3
};

constants.LISTTYPEFORFRONTENDFILTERATION = {
  FEEDBACKREQUESTLIST: 1,
  QUESTIONLIST: 2,
  LIKELIST: 3,
  FEEDBACKRESPONSELIST: 4,
  BADGELIST: 5,
  REPLYLIST: 6
}

constants.BADGES = {
  NOBADGE: 0,
  COURAGEOUS: 1,
  HELPFULGROWTH: 2,
  ACTIONABLE: 3
};

constants.FILTERARRAY = [1, 2, 3, 4, 5, 6];
constants.FILTERS = {
  REQUESTS: 1,
  RESPONSES: 2,
  RATING: 3,
  BADGE1: 4,
  BADGE2: 5,
  BADGE3: 6
};

constants.MANAGERDASHBOARDFEEDBACKSTIMELIMIT = 28 * 24 * 60 * 60 * 1000;


constants.SERVER = {
  APP_NAME: 'sml',
  HOSTS: {
    IP_HOST: '192.168.43.166',
    LOCAL_HOST: '0.0.0.0',
    LIVE_HOST: ''
  },
  PORTS: {
    PORT: 3000,
    localPort: 3001
  },
  TOKEN_EXPIRATION_IN_MINUTES: 600,
  JWT_SECRET_KEY: 'thisIsJwtSecret',
  GOOGLE_API_KEY: '',
  COUNTRY_CODE: '+91',
  MAX_DISTANCE_RADIUS_TO_SEARCH: '1',
  THUMB_WIDTH: 300,
  THUMB_HEIGHT: 300,
  BASE_DELIVERY_FEE: 25,
  COST_PER_KM: 9, // In USD
  DOMAIN_NAME: 'http://localhost:8000/',
  SUPPORT_EMAIL: 'sml@outlook.com'
};

constants.DATABASE = {
  ZONES: {
    NORTH: 'NORTH',
    SOUTH: 'SOUTH',
    BOTH: 'BOTH'
  },
  STATUS: {
    OPEN: 'OPEN',
    PENDING: 'PENDING',
    ACCEPT: 'ACCEPT',
    REJECT: 'REJECT',
    APPROVED: 'APPROVED',
    CLOSE: 'CLOSE',
    DELETED: 'DELETED'

  },
  LEAD_TYPE: {
    FULL: 'FULL',
    QUICK: 'QUICK'
  },
  CLOSED_STATUS: {
    OPEN: 'OPEN',
    BOOKED: 'BOOKED',        //truck
    DELIVERED: 'DELIVERED',
    LOST: 'LOST',
    DEFERRED: 'DEFERRED',
    PENDINGFORAPPROVAL: 'PENDINGFORAPPROVAL'

  },
  OPEN_STATUS: {
    HOT: 'HOT',
    COLD: 'COLD',
    WARM: 'WARM'
  },

  CATEGORY: {
    GOODS_CARRIER: 'GOODS CARRIER',
    PASSENGER_CARRIER: 'PASSENGER CARRIER'
  },

  PROFILE_PIC_PREFIX: {
    ORIGINAL: 'profilePic_',
    THUMB: 'profileThumb_'
  },
  LOGO_PREFIX: {
    ORIGINAL: 'logo_',
    THUMB: 'logoThumb_'
  },
  DOCUMENT_PREFIX: 'document_',
  USER_ROLES: {
    ADMIN: 'ADMIN',
    ZONAL: 'ZONAL',
    MOFFICER: 'MOFFICER',
    LEAD: 'LEAD',
    SALES: 'SALES',
    DEALER: 'DEALER'

  },
  COUPON_TYPE:
  {
    FLAT: 'FLAT',
    PERCENTAGE: 'PERCENTAGE'
  },
  FILE_TYPES: {
    LOGO: 'LOGO',
    DOCUMENT: 'DOCUMENT',
    OTHERS: 'OTHERS'
  },
  VEHICLE_TYPE: {
    BICYCLE: 'BICYCLE',
    SCOOTER: 'SCOOTER',
    CAR: 'CAR'
  },
  DEVICE_TYPES: {
    IOS: 'IOS',
    ANDROID: 'ANDROID'
  },
  USER_GET_TYPE: {
    ITEMS: 'ITEMS',
    STORES: 'STORES',
    ACTIVITY: 'ACTIVITY',
  },
  STATUS_TYPES: {
    PENDING: 'PENDING',
    PROGRESS: 'PROGRESS',
    DELIVERED: 'DELIVERED',
    ACCEPT: 'ACCEPT',
    USERRATE: 'USERRATE',
    SUPPLIERRATE: 'SUPPLIERRATE',
    COMPLETE: 'COMPLETE',
    CANCEL: 'CANCEL',
    ENROUTE: 'ENROUTE',
    START: 'START',
    END: 'END',
    ARRIVED: 'ARRIVED',
    RATING: 'RATING'
  },

  GENDER:
  {
    MALE: 'MALE',
    FEMALE: 'FEMALE'
  },


  LANGUAGE: {
    EN: 'EN',
    ES_MX: 'ES_MX'
  },
  PAYMENT_OPTIONS: {
    CREDIT_DEBIT_CARD: 'CREDIT_DEBIT_CARD',
    PAYPAL: 'PAYPAL',
    BITCOIN: 'BITCOIN',
    GOOGLE_WALLET: 'GOOGLE_WALLET',
    APPLE_PAY: 'APPLE_PAY',
    EIYA_CASH: 'EIYA_CASH'
  }
};

constants.RESPONSEMESSAGES = {
  ERROR: {
    DATA_NOT_FOUND: (msg) => {
      if (!msg) {
        msg = '';
      }
      return {
        statusCode: 404,
        msg: msg,
        status: false,
        type: 'DATA_NOT_FOUND',
      };
    },
    BAD_REQUEST: (msg) => {
      if (!msg) {
        msg = '';
      }
      return {
        statusCode: 400,
        msg: msg,
        status: false,
        type: 'BAD_REQUEST',
      };
    },
    MONGO_EXCEPTION: (msg) => {
      if (!msg) {
        msg = '';
      }
      return {
        statusCode: 100,
        msg: msg,
        status: false,
        type: 'MONGO_EXCEPTION',
      };
    },
    ALREADY_EXISTS: (msg) => {
      if (!msg) {
        msg = '';
      }
      return {
        statusCode: 405,
        msg: msg,
        status: false,
        type: 'ALREADY_EXISTS',
      };
    },
    FORBIDDEN: (msg) => {
      if (!msg) {
        msg = '';
      }
      return {
        statusCode: 403,
        msg: msg,
        status: false,
        type: 'Forbidden',
      };
    }
  },
  SUCCESS: {
    MISSCELANEOUSAPI: (msg) => {
      if (!msg) {
        msg = '';
      }
      return {
        statusCode: 200,
        msg: msg,
        status: true,
        type: 'Default',
      };
    }
  }
}
constants.create404MSg = (type, msg) => {
  return {
    statusCode: 400,
    msg: msg,
    type: type,
  };
}

constants.STATUS_MSG = {
  ERROR: {
    DELETED_USER: {
      statusCode: 400,
      type: 'DELETED_USER',
      msg: 'You are no more Sales Excecutive register again !'
    },

    CAN_NOT_DELETE: {
      statusCode: 400,
      type: 'CAN_NOT_DELETE',
      msg: 'Plz reallocate all lead to another Sales Executive first!'
    },
    PENDING_CONFIRM: {
      statusCode: 400,
      type: 'PENDING_CONFIRM',
      msg: 'Pending Request Not Confirmed by SalesExcecutive '
    },
    ALREADY_EXIST: {
      statusCode: 400,
      type: 'ALREADY_EXIST',
      msg: 'Email Already Exist'
    },

    APPROVAL_PENDING: {
      statusCode: 400,
      type: 'APPROVAL_PENDING',
      msg: 'Your approval is pending '
    },
    PRODUCT_ALREADY_EXIST: {
      statusCode: 400,
      type: 'PRODUCT_ALREADY_EXIST',
      msg: 'Product Already Exist '

    },



    DATA_NOT_FOUND: {
      statusCode: 400,
      msg: 'No data Found',
      type: 'DATA_NOT_FOUND',
    },
    INVALID_USER_PASS: {
      statusCode: 400,
      type: 'INVALID_USER_PASS',
      msg: 'Invalid username or password'
    },
    INVALID_USERNAME: {
      statusCode: 400,
      type: 'INVALID_USER_NAME',
      msg: 'Invalid Username.'
    },
    INVALID_PASSWORD: {
      statusCode: 400,
      type: 'INVALID_PASS',
      msg: 'Invalid password.'
    },
    TOKEN_ALREADY_EXPIRED: {
      statusCode: 401,
      msg: 'Token Already Expired',
      type: 'TOKEN_ALREADY_EXPIRED'
    },
    DB_ERROR: {
      statusCode: 400,
      msg: 'DB Error : ',
      type: 'DB_ERROR'
    },
    INVALID_ID: {
      statusCode: 400,
      msg: 'Invalid Id Provided : ',
      type: 'INVALID_ID'
    },
    APP_ERROR: {
      statusCode: 400,
      msg: 'Application Error',
      type: 'APP_ERROR'
    },
    ADDRESS_NOT_FOUND: {
      statusCode: 400,
      msg: 'Address not found',
      type: 'ADDRESS_NOT_FOUND'
    },
    SAME_ADDRESS_ID: {
      statusCode: 400,
      msg: 'Pickup and Delivery Address Cannot Be Same',
      type: 'SAME_ADDRESS_ID'
    },
    PICKUP_ADDRESS_NOT_FOUND: {
      statusCode: 400,
      msg: 'Pickup Address not found',
      type: 'PICKUP_ADDRESS_NOT_FOUND'
    },
    DELIVERY_ADDRESS_NOT_FOUND: {
      statusCode: 400,
      msg: 'Delivery Address not found',
      type: 'DELIVERY_ADDRESS_NOT_FOUND'
    },
    IMP_ERROR: {
      statusCode: 500,
      msg: 'Implementation Error',
      type: 'IMP_ERROR'
    },
    APP_VERSION_ERROR: {
      statusCode: 400,
      msg: 'One of the latest version or updated version value must be present',
      type: 'APP_VERSION_ERROR'
    },
    INVALID_TOKEN: {
      statusCode: 401,
      msg: 'Invalid token provided',
      type: 'INVALID_TOKEN'
    },
    INVALID_CODE: {
      statusCode: 400,
      msg: 'Invalid Verification Code',
      type: 'INVALID_CODE'
    },
    DEFAULT: {
      statusCode: 400,
      msg: 'Error',
      type: 'DEFAULT'
    },
    PHONE_NO_EXIST: {
      statusCode: 400,
      msg: 'Phone No Already Exist',
      type: 'PHONE_NO_EXIST'
    },
    SKU_EXIST: {
      statusCode: 400,
      msg: 'SKU No Already Exist',
      type: 'SKU_EXIST'
    },
    ORDER_EXIST: {
      statusCode: 400,
      msg: 'Order No Already Exist',
      type: 'ORDER_EXIST'
    },
    EMAIL_EXIST: {
      statusCode: 400,
      msg: 'Email Already Exist',
      type: 'EMAIL_EXIST'
    },

    EMAIL_NOT_FOUND: {
      statusCode: 400,
      msg: 'Email not found',
      type: 'EMAIL_NOT_FOUND'
    },
    DUPLICATE: {
      statusCode: 400,
      msg: 'Duplicate Entry',
      type: 'DUPLICATE'
    },
    DUPLICATE_ADDRESS: {
      statusCode: 400,
      msg: 'Address Already Exist',
      type: 'DUPLICATE_ADDRESS'
    },
    UNIQUE_CODE_LIMIT_REACHED: {
      statusCode: 400,
      msg: 'Cannot Generate Unique Code, All combinations are used',
      type: 'UNIQUE_CODE_LIMIT_REACHED'
    },
    INVALID_REFERRAL_CODE: {
      statusCode: 400,
      msg: 'Invalid Referral Code',
      type: 'INVALID_REFERRAL_CODE'
    },
    FACEBOOK_ID_PASSWORD_ERROR: {
      statusCode: 400,
      msg: 'Only one field should be filled at a time, either facebookId or password',
      type: 'FACEBOOK_ID_PASSWORD_ERROR'
    },
    INVALID_EMAIL: {
      statusCode: 400,
      msg: 'Invalid Email Address',
      type: 'INVALID_EMAIL'
    },
    PASSWORD_REQUIRED: {
      statusCode: 400,
      msg: 'Password is required',
      type: 'PASSWORD_REQUIRED'
    },
    EMAIL_REQUIRED: {
      statusCode: 400,
      msg: 'Email is required.',
      type: 'EMAIL_REQUIRED'
    },
    USERNAME_REQUIRED: {
      statusCode: 400,
      msg: 'Username is required.',
      type: 'USERNAME_REQUIRED'
    },
    INVALID_COUNTRY_CODE: {
      statusCode: 400,
      msg: 'Invalid Country Code, Should be in the format +52',
      type: 'INVALID_COUNTRY_CODE'
    },
    INVALID_PHONE_NO_FORMAT: {
      statusCode: 400,
      msg: 'Phone no. cannot start with 0',
      type: 'INVALID_PHONE_NO_FORMAT'
    },
    COUNTRY_CODE_MISSING: {
      statusCode: 400,
      msg: 'You forgot to enter the country code',
      type: 'COUNTRY_CODE_MISSING'
    },
    INVALID_PHONE_NO: {
      statusCode: 400,
      msg: 'Phone No. & Country Code does not match to which the OTP was sent',
      type: 'INVALID_PHONE_NO'
    },
    PHONE_NO_MISSING: {
      statusCode: 400,
      msg: 'You forgot to enter the phone no.',
      type: 'PHONE_NO_MISSING'
    },
    NOTHING_TO_UPDATE: {
      statusCode: 400,
      msg: 'Nothing to update',
      type: 'NOTHING_TO_UPDATE'
    },
    NOT_FOUND: {
      statusCode: 404,
      status: false,
      type: 'NOT_FOUND'
    },
    INVALID_RESET_PASSWORD_TOKEN: {
      statusCode: 400,
      msg: 'Invalid Reset Password Token',
      type: 'INVALID_RESET_PASSWORD_TOKEN'
    },

    INCORRECT_PASSWORD: {
      statusCode: 400,
      msg: 'Incorrect Password',
      type: 'INCORRECT_PASSWORD'
    },
    INCORRECT_FILE: {
      statusCode: 400,
      msg: 'Incorrect File',
      type: 'INCORRECT_FILE'
    },
    INCORRECT_OLD_PASSWORD: {
      statusCode: 400,
      msg: 'Incorrect old password',
      type: 'INCORRECT_OLD_PASSWORD'
    },
    EMPTY_VALUE: {
      statusCode: 400,
      msg: 'Empty String Not Allowed',
      type: 'EMPTY_VALUE'
    },
    PHONE_NOT_MATCH: {
      statusCode: 400,
      msg: "Phone No. Doesn't Match",
      type: 'PHONE_NOT_MATCH'
    },
    SAME_PASSWORD: {
      statusCode: 400,
      msg: 'Old password and new password are same',
      type: 'SAME_PASSWORD'
    },
    ACTIVE_PREVIOUS_SESSIONS: {
      statusCode: 400,
      msg: 'You already have previous active sessions, confirm for flush',
      type: 'ACTIVE_PREVIOUS_SESSIONS'
    },
    EMAIL_ALREADY_EXIST: {
      statusCode: 400,
      msg: 'Email Address Already Exists',
      type: 'EMAIL_ALREADY_EXIST'
    },
    ERROR_PROFILE_PIC_UPLOAD: {
      statusCode: 400,
      msg: 'Profile pic is not a valid file',
      type: 'ERROR_PROFILE_PIC_UPLOAD'
    },
    PHONE_ALREADY_EXIST: {
      statusCode: 400,
      msg: 'Phone No. Already Exists',
      type: 'PHONE_ALREADY_EXIST'
    },
    EMPLOYEECODE_NOT_FOUND: {
      statusCode: 400,
      msg: 'EmployeeCode Not Found',
      type: 'EMPLOYEECODE_NOT_FOUND'
    },
    BLOCK_USER: {
      statusCode: 401,
      msg: 'You are blocked by Admin',
      type: 'BLOCK_USER'
    },
    FACEBOOK_ID_NOT_FOUND: {
      statusCode: 400,
      msg: 'Facebook Id Not Found',
      type: 'FACEBOOK_ID_NOT_FOUND'
    },
    PHONE_NOT_FOUND: {
      statusCode: 400,
      msg: 'Phone No. Not Found',
      type: 'PHONE_NOT_FOUND'
    },
    RECORD_NOT_FOUND: {
      statusCode: 400,
      msg: 'No More Records Found',
      type: 'RECORD_NOT_FOUND'
    },
    INCORRECT_OLD_PASS: {
      statusCode: 400,
      msg: 'Incorrect Old Password',
      type: 'INCORRECT_OLD_PASS'
    },
    UNAUTHORIZED: {
      statusCode: 401,
      msg: 'You are not authorized to perform this action',
      type: 'UNAUTHORIZED'
    }

  },
  SUCCESS: {
    CREATED: {
      statusCode: 200,
      msg: 'Created Successfully',
      type: 'CREATED'
    },
    DEFAULT: {
      statusCode: 200,
      status: true,
      type: 'DEFAULT'
    },
    UPDATED: {
      statusCode: 200,
      msg: 'Updated Successfully',
      type: 'UPDATED'
    },
    RESTORED: {
      statusCode: 200,
      msg: 'Restored Successfully',
      type: 'RESTORED'
    },
    LOGOUT: {
      statusCode: 200,
      msg: 'Logged Out Successfully',
      type: 'LOGOUT'
    },
    DELETED: {
      statusCode: 200,
      msg: 'Deleted Successfully',
      type: 'DELETED'
    }
  }
};


constants.swaggerDefaultResponseMessages = [
  { code: 200, message: 'OK' },
  { code: 400, message: 'Bad Request' },
  { code: 401, message: 'Unauthorized' },
  { code: 404, message: 'Data Not Found' },
  { code: 500, message: 'Internal Server Error' }
];

constants.SCREEN_TO_SHOW = {
  HOMEPAGE: 'HOMEPAGE',
  TRACKING: 'TRACKING',
  FEEDBACK: 'FEEDBACK'
};

constants.notificationMessages = {
  verificationCodeMsg: 'Your 4 digit verification code for Seed Project is {{four_digit_verification_code}}',
  registrationEmail: {
    emailMessage: "Dear {{user_name}}, <br><br> Please  <a href='{{verification_url}}'>click here</a> to verify your email address",
    emailSubject: "Welcome to Seed Project"
  },
  contactDriverForm: {
    emailMessage: "A new driver has showed interest <br><br> Details : <br><br> Name : {{fullName}} <br><br> Email : {{email}} <br><br> Phone No : {{phoneNo}} <br><br> Vehicle Type : {{vehicleType}} <br><br> Bank Account : {{bankAccountBoolean}} <br><br> Heard From : {{heardFrom}}",
    emailSubject: "New Driver Contact Request"
  },
  contactBusinessForm: {
    emailMessage: "A new business has showed interest <br><br> Details : <br><br> Name : {{fullName}} <br><br> Email : {{email}} <br><br> Phone No : {{phoneNo}} <br><br> Business Name: {{businessName}} <br><br> Business Address: {{businessAddress}}  <br><br> Delivery Service : {{ownDeliveryService}} <br><br> Heard From : {{heardFrom}}",
    emailSubject: "New Business Contact Request"
  },
  forgotPassword: {
    emailMessage: "Dear {{user_name}}, <br><br>  Your reset password token is <strong>{{password_reset_token}}</strong> , <a href='{{password_reset_link}}'> Click Here </a> To Reset Your Password",
    emailSubject: "Password Reset Notification For Seed Project"
  }
};

constants.languageSpecificMessages = {
  verificationCodeMsg: {
    EN: 'Your 4 digit verification code for Seed Project is {{four_digit_verification_code}}',
    ES_MX: 'Your 4 digit verification code for Seed Project is {{four_digit_verification_code}}'
  }
};

module.exports = constants;