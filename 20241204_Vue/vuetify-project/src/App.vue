<template>
  <VApp>
    <VAppBar>
      <VContainer class="d-flex align-center">
        <VAppBarTitle>VUETIFY</VAppBarTitle>
        <VBtn prepend-icon="mdi-home" to="/">首頁</VBtn>
        <VBtn prepend-icon="mdi-cog" to="/test">其他頁</VBtn>
      </VContainer>
    </VAppBar>
    <VMain>
      <RouterView></RouterView>
    </VMain>
  </VApp>
</template>
