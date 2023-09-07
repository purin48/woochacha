import { authInstance } from '@/utils/api';

/**
 * [관리자 - members] 모든 사용자 목록 조회 (GET)
 */
export const allUserGetApi = async () => {
  try {
    const response = await authInstance.get('/admin/members');
    const data = response.data;
    return data;
  } catch (error) {
    console.log('실패 : ', error);
    throw error;
  }
};

/**
 * [관리자 - members] 특정 사용자 상세정보 조회 (GET)
 */
export const oneUserGetApi = async (memberId) => {
  try {
    const response = await authInstance.get(`/admin/members/${memberId}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log('실패 : ', error);
    throw error;
  }
};

/**
 * [관리자 - members] 특정 사용자 정보 수정 요청 (PATCH)
 */
export const oneUserEditPatchApi = async (editProfileValue, memberId) => {
  try {
    const patchData = {
      isChecked: editProfileValue.isChecked ? 1 : 0,
      isAvailable: editProfileValue.status,
    };
    const response = await authInstance.patch(`/admin/members/edit/${memberId}`, patchData);
    return response;
  } catch (error) {
    console.log('실패 : ', error);
    throw error;
  }
};

/**
 * [관리자 - product] 매물 관리자 페이지에서 매물 수정, 삭제 신청 요청 조회 (GET)
 */
export const allProductApplicationsGetApi = async () => {
  try {
    const response = await authInstance.get('/admin/product');
    const data = response.data;
    return data;
  } catch (error) {
    console.log('실패 : ', error);
    throw error;
  }
};

/**
 * [관리자 - product] 매물 관리자 페이지에서 매물 수정 팝업 페이지 조회 (GET)
 */
export const editProductApplicationsGetApi = async (productId) => {
  try {
    const response = await authInstance.get(`/admin/product/edit/${productId}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log('실패 : ', error);
    throw error;
  }
};

/**
 * [관리자 - product] 매물 관리자 페이지에서 매물 수정 승인 (PATCH)
 */
export const editApproveProductApplicationsPatchApi = async (productId) => {
  try {
    const response = await authInstance.patch(`/admin/product/edit/${productId}`);
    return response;
  } catch (error) {
    console.log('실패 : ', error);
    throw error;
  }
};

/**
 * [관리자 - product] 매물 관리자 페이지에서 매물 수정 반려 (PATCH)
 */
export const editDenyProductApplicationsPatchApi = async (productId) => {
  try {
    const response = await authInstance.patch(`admin/product/edit/deny/${productId}`);
    return response;
  } catch (error) {
    console.log('실패 : ', error);
    throw error;
  }
};

/**
 * [관리자 - product] 매물 관리자 페이지에서 매물 수정 삭제 (PATCH)
 */
export const deleteProductApplicationsPatchApi = async (productId) => {
  try {
    const response = await authInstance.patch(`admin/product/delete/${productId}`);
    return response;
  } catch (error) {
    console.log('실패 : ', error);
    throw error;
  }
};

/**
 * [관리자 - sale] 판매 신청 관리 목록 전체 조회 (GET)
 */
export const allSaleFormGetApi = async () => {
  try {
    const response = await authInstance.get(`admin/sales`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log('실패 : ', error);
    throw error;
  }
};

/**
 * [관리자 - sale] 판매 신청 폼 반려하기 (PATCH)
 */
export const denySaleFormPatchApi = async (saleFormId) => {
  try {
    const response = await authInstance.patch(`admin/sales/deny/${saleFormId}`);
    return response;
  } catch (error) {
    console.log('실패 : ', error);
    throw error;
  }
};

/**
 * [관리자 - sale] 점검차량 정보 입력 (GET)
 */
export const oneApproveFormGetApi = async (saleFormId) => {
  try {
    const response = await authInstance.get(`admin/sales/approve/${saleFormId}`);
    return response;
  } catch (error) {
    console.log('실패 : ', error);
    throw error;
  }
};

/**
 * [관리자 - sale] 점검차량 정보 입력 후, patch 요청 (PATCH)
 */
export const oneApproveFormPatchApi = async (saleFormId) => {
  try {
    const response = await authInstance.get(`admin/sales/approve/${saleFormId}`);
    return response;
  } catch (error) {
    console.log('실패 : ', error);
    throw error;
  }
};

/**
 * [관리자 - sale] 차량 게시글 등록을 위한 폼 데이터를 QLDB에서 조회 (GET)
 */
export const oneRegisterFormGetApi = async (saleFormId) => {
  try {
    const response = await authInstance.get(`admin/sales/register/${saleFormId}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log('실패 : ', error);
    throw error;
  }
};

/**
 * [관리자 - sale] 차량 게시글을 등록 (POST)
 */
export const oneRegisterFormPostApi = async (saleFormId, registerInputForm) => {
  try {
    const response = await authInstance.post(
      `admin/sales/register/${saleFormId}`,
      registerInputForm,
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log('실패 : ', error);
    throw error;
  }
};
