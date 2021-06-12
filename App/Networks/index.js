// export const BaseUrl="https://api-sandbox.makemyhouse.com/"
export const BaseUrl="http://nestmcqs-backend.herokuapp.com/"  //Production
//export const BaseUrl="https://api-uat.makemyhouse.com/" //testing

export const BaseMediaUrl="https://www.makemyhouse.com/"
export const login = "nextmcqs/auth/login"
export const Register = "nextmcqs/auth/register"

export const ProfileInfo ='nextmcqs/user/userProfile'
export const CustomerType ='public/CustomerProfile/customerType'
export const CustomerService ='public/CustomerProfile/customerServices/'

export const UpdateProfileInfo ='customer/me/updateProfile'

export const DesignStoryAPI = 'public/products/random/0?limit=5'
export const blogAPI = 'public/blogs'

export const ProfessionalListAPI ='public/professionals'
export const ProfessionalDetailsAPI ='public/professional/'
export const ProfessionalServiceAPI ='public/professionals/services/'

export const CustomerGetProfile ='customer/me/customerProfile'
export const setCustomerType = 'customer/Me/setCustomerType'    //Category and Subcategory

export const ResetPassword = "/public/CustomerProfile/resetPassword"
export const Change_Password = "customer/me/changePassword"
export const VerifyPassword = "/public/CustomerProfile/verifyOtp"
export const ReviewSend = "/customer/me/review"

export const GoogleLogin = "customer/me/glogin"
export const OrderList = "customer/Orders"
export const AttachmentList= "customer/media/listMediaIds"
export const RPayAttempt= "customer/orders/rpayAttempt"
export const GetChatList = "customer/chat"

export const UpdateCustomerProfile = "customer/me/"
export const GetProfile = "customer/me/"
export const UploadFIle = "customer/media"
export const GetApproval = 'customer/media/mediaDetails/'
export const ActionApproval = 'customer/media/actionApproval/'
export const ImageResize = "Images/awsObjResize/"
export const PublicMedia = 'public/media/'
export const mediaDetail = 'customer/media/mediaDetails/'
export const updateProfile = 'customer/me/update';
export const updateBusinessProfile = 'customer/me/businessInformation'
export const designerLeadPrefrence = 'public/Leads/designerLeadPrefrence'
export const contractorLeadPrefrence = 'public/Leads/contractorLeadPrefrence'
export const servicesLeadPrefrence = 'public/Leads/servicesLeadPrefrence'
export const GetLeadPrefrence = 'customer/lead/preferences'
export const states = 'public/Forms/state'
export const city = 'public/Forms/state/city'
export const getLeads = 'customer/Lead'
export const fetchLeads = 'customer/Lead/request'
export const leadsDetails = 'customer/Lead?leadID'
export const addComment = 'customer/Lead/addComment/'
export const updateLeadStatus = 'customer/Lead/updateStatus'
export const listComment = 'customer/Lead/comment?leadID'
export const claimLead ='customer/Lead/feedback'
export const leadStatus = 'customer/Lead/leadStatus'
export const sendSms = 'customer/Lead/sms'
export const leadFilter = 'customer/Lead?status='

//products
export const getProducts = 'customer/products?limit=10&offset='

export const Productsimg = 'customer/products/image'
export const addProduct="customer/products/"
export const productPrice = 'customer/products/pricing/'

export const productCategory= 'public/products/categories'
export const ProductApproval= 'customer/products/priceApproval/'
export const productDetail='customer/products/details/'
export const productUpdate='customer/products/'

export const getCategory ='public/products/categories/'
export const getProductType ='public/products/productTypes'

export const ConsultUs = 'public/consultus'

//project

export const UploadFiles ='customer/Projects/image'

export const getProjects = 'customer/Projects?offset='
export const addProjects = 'customer/Projects'
export const projectDetails = 'customer/Projects/projectDetail/'
export const editProjects = 'customer/Projects/'
export const projectimageDetails ='customer/Projects/image/'
export const getOtp = 'customer/me/loginotp'
export const verifyOtps = 'customer/me/veryfyotp'
export const directenquiry = 'customer/enquiry/'
export const listPlans = 'customer/Lead/plan/'
export const leadCalling = 'customer/lead/call/'
export const updateProfileImage = 'customer/Me/profilepic'
export const updateCoverImage = 'customer/Me/coverImage'
