<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center>
        <v-flex xs12 justify-center>
          <div class="text-xs-center">
            <h2 class="display-1">i2 Ingest Config Maker</h2>
            <p class="blockquote">
              Generate an <code>i2Config.properties</code> configuration file quickly and hassle free.
            </p>
            <v-btn color="primary" large @click="$router.push({ name: 'dashboard' })">
              get started
            </v-btn>
            <br>
            <v-btn flat @click="aboutDialog = true">About</v-btn>
            <v-dialog v-model="aboutDialog" width="450">
            <v-layout>
              <v-flex xs12>
                <v-card>
                  <br>
                  <v-img :src="ibmLogo" alt="IBM Logo" class="center" max-width="250" aspect-ratio="2.75"/>
                  <br>
                  <v-card-text>
                    <strong>Version: </strong> 0.1.0
                    <br>
                    <strong>Developers: </strong> Dr. Wilfred Jamison and Pratik Abhyankar
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      flat
                      @click="aboutDialog = false"
                    >
                      close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
            </v-dialog>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import ibmLogo from '@/assets/ibm-logo-png-transparent-background-300x200.png'

export default {
  name: 'Home',
  data () {
    return {
      ibmLogo,
      ibmLogoWidth: 200,
      ibmLogoHeight: 100,
      aboutDialog: false
    }
  },
  methods: {
    showAboutDialog () {

    }
  }
}
</script>

<style scoped>
.center {
  margin: auto;
}
</style>
