<template>
  <div>
      <EdgeDbAuthEmailLogin
        v-slot="{
          email,
          updateEmail,
          password,
          updatePassword,
          submit,
          loading,
        }"
        redirect-to="/"
      >
        <div>
          <!-- @vue-ignore -->
          <input
            type="email"
            :value="email"
            placeholder="your@email.com"
            @change="updateEmail($event.target.value)"
          />
          <!-- @vue-ignore -->
          <input
            type="password"
            :value="password"
            placeholder="password"
            @change="updatePassword($event.target.value)"
          />
          <button type="button" @click="(e) => !loading && submit()">
            {{ loading ? 'Loading' : 'Login' }}
          </button>
        </div>
      </EdgeDbAuthEmailLogin>
  </div>
</template>
