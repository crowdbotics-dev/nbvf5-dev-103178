import axios from "axios"
const nbvfdevAPI = axios.create({
  baseURL: "https://nbvf5-dev-103178.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return nbvfdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return nbvfdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_sderr_list(payload) {
  return nbvfdevAPI.get(`/api/v1/sderr/`)
}
function api_v1_sderr_create(payload) {
  return nbvfdevAPI.post(`/api/v1/sderr/`, payload)
}
function api_v1_sderr_retrieve(payload) {
  return nbvfdevAPI.get(`/api/v1/sderr/${payload.id}/`)
}
function api_v1_sderr_update(payload) {
  return nbvfdevAPI.put(`/api/v1/sderr/${payload.id}/`, payload)
}
function api_v1_sderr_partial_update(payload) {
  return nbvfdevAPI.patch(`/api/v1/sderr/${payload.id}/`, payload)
}
function api_v1_sderr_destroy(payload) {
  return nbvfdevAPI.delete(`/api/v1/sderr/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return nbvfdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_vcncn_list(payload) {
  return nbvfdevAPI.get(`/api/v1/vcncn/`)
}
function api_v1_vcncn_create(payload) {
  return nbvfdevAPI.post(`/api/v1/vcncn/`, payload)
}
function api_v1_vcncn_retrieve(payload) {
  return nbvfdevAPI.get(`/api/v1/vcncn/${payload.id}/`)
}
function api_v1_vcncn_update(payload) {
  return nbvfdevAPI.put(`/api/v1/vcncn/${payload.id}/`, payload)
}
function api_v1_vcncn_partial_update(payload) {
  return nbvfdevAPI.patch(`/api/v1/vcncn/${payload.id}/`, payload)
}
function api_v1_vcncn_destroy(payload) {
  return nbvfdevAPI.delete(`/api/v1/vcncn/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return nbvfdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return nbvfdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return nbvfdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return nbvfdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return nbvfdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return nbvfdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return nbvfdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return nbvfdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return nbvfdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return nbvfdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return nbvfdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_sderr_list,
  api_v1_sderr_create,
  api_v1_sderr_retrieve,
  api_v1_sderr_update,
  api_v1_sderr_partial_update,
  api_v1_sderr_destroy,
  api_v1_signup_create,
  api_v1_vcncn_list,
  api_v1_vcncn_create,
  api_v1_vcncn_retrieve,
  api_v1_vcncn_update,
  api_v1_vcncn_partial_update,
  api_v1_vcncn_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
