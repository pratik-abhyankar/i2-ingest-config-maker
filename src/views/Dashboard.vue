<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-start justify-center>
        <v-flex>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">Main Properties</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2">Time Zone</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 3" step="3">Data Source</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 4" step="4">Security</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 5" step="5">Input</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="6">Output</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-select v-model="p.debug" :items="debugSelect" item-text="label" item-value="value" label="Debug" required></v-select>
              <v-select v-model="p.osType" :items="osTypeSelect" item-text="label" item-value="value" label="OS Type" required></v-select>
              <v-text-field v-model="p.i2Home" label="i2 Home Folder" required></v-text-field>
              <v-text-field v-model="p.i2Schema" label="i2 Schema Full Path" required></v-text-field>
              <v-text-field v-model="p.i2ChartingSchema" label="i2 Charting Schema Full Path" required></v-text-field>
              <v-text-field v-model="p.i2MetadataFilename" label="i2 Metadata Filename" required></v-text-field>
              <v-text-field v-model="p.i2SchemaSourceDir" label="i2 Schema Source Folder" required></v-text-field>
              <v-text-field v-model="p.i2DatabaseName" label="i2 Database Name" required></v-text-field>
              <v-text-field v-model="p.DB2Username" label="DB2 Username" required></v-text-field>
              <v-text-field type="password" v-model="p.DB2Password" label="DB2 Password" required></v-text-field>
              <v-text-field v-model="p.stagingSchemaName" label="Staging Schema Name" required></v-text-field>
              <v-select v-model="p.createChartingSchema" :items="booleanSelect" item-text="label" item-value="value" label="Create Charting Schema" required></v-select>
              <v-select v-model="p.processingMode" :items="modeSelect" item-text="label" item-value="value" label="Processing Mode" required></v-select>
              <v-select v-model="p.useGenericEntity" :items="booleanSelect" item-text="label" item-value="value" label="Use Generic Entity" required></v-select>
              <v-text-field v-model="p.genericEntityPrefix" label="Generic Entity Prefix"></v-text-field>
              <v-text-field v-model="p.CSVColumnDelimiter" label="CSV Column Delimiter"></v-text-field>
              <v-layout align-content-end>
                <!-- <v-flex>
                  <v-btn color="primary" @click="e1 = 7">Back</v-btn>
                </v-flex> -->
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-flex class="right">
                  <v-btn color="primary" @click="e1 = 2">Next</v-btn>
                </v-flex>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-select v-model="p.timeZone" :items="timeZonesList" label="Time Zone" required></v-select>
              <v-select v-model="p.dst" :items="dstSelect" item-text="label" item-value="value" label="Day Light Saving Observed?" required></v-select>
              <v-layout align-content-end>
                <v-flex>
                  <v-btn color="primary" @click="e1 = 1">Back</v-btn>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex class="right">
                  <v-btn color="primary" @click="e1 = 3">Next</v-btn>
                </v-flex>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-text-field v-model="p.originType" label="ID of Origin Type" required></v-text-field>
              <v-text-field v-model="p.dataSource" label="Name of Data Source" required></v-text-field>
              <v-layout align-content-end>
                <v-flex>
                  <v-btn color="primary" @click="e1 = 2">Back</v-btn>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex class="right">
                  <v-btn color="primary" @click="e1 = 4">Next</v-btn>
                </v-flex>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-select v-model="p.securitySpecificationMode" :items="securitySpecificationModeSelect" item-text="label" item-value="value" label="Security Specification Mode" @change="onSecuritySpecificationModeChange"></v-select>
              <v-text-field v-if="p.isSecurityDimensionValuesColumnsVisible" v-model="p.securityDimensionValuesColumns" label="Security Dimension Values Columns" required></v-text-field>
              <v-text-field v-if="p.isSecurityDimensionValuesVisible" v-model="p.securityDimensionValues" label="Security Dimension Values" required></v-text-field>
              <v-layout align-content-end>
                <v-flex>
                  <v-btn color="primary" @click="e1 = 3">Back</v-btn>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex class="right">
                  <v-btn color="primary" @click="e1 = 5">Next</v-btn>
                </v-flex>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="5">
              <v-text-field v-model="p.OIMPSourceFolder" label="OIMP Source Folder" required></v-text-field>
              <v-text-field v-model="p.CSVFolder" label="CSV Source Folder" required></v-text-field>
              <v-text-field v-model="p.CSVTypes" label="CSV Types" required></v-text-field>
              <v-text-field v-model="p.CSVLinkTypes" label="CSV Link Types" required></v-text-field>
              <v-select v-model="p.importMode" :items="importModeSelect" item-text="label" item-value="value" label="Import Mode" required></v-select>
              <v-layout align-content-end>
                <v-flex>
                  <v-btn color="primary" @click="e1 = 4">Back</v-btn>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex class="right">
                  <v-btn color="primary" @click="e1 = 6; isDialogVisible = false">Next</v-btn>
                </v-flex>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="6">
              <v-text-field v-model="p.logFolder" label="Log Destination Folder" required></v-text-field>
              <v-text-field v-model="p.SQLScriptFolder" label="SQL Scripts Destination Folder" required></v-text-field>
              <v-layout align-content-end>
                <v-flex>
                  <v-btn color="primary" @click="e1 = 5; isDialogVisible = false">Back</v-btn>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex class="right">
                  <v-btn color="primary" :loading="loading" @click="generateConfigFile">Finish</v-btn>
                </v-flex>
              </v-layout>
              <v-alert :value="isDialogVisible" :type="dialogType" :dismissible="isDismissible">
                {{ dialogMessage }}
              </v-alert>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import TimeZones from '@/components/TimeZones.js'
import template from '@/components/Template.js'
import fs from 'fs'
import path from 'path'

export default {
  data () {
    return {
      e1: 0,
      debugSelect: [
        { label: 'On', value: 'ON' },
        { label: 'Off', value: 'OFF' }
      ],
      osTypeSelect: [
        { label: 'Windows', value: 'WIN' },
        { label: 'Linux', value: 'LINUX' }
      ],
      booleanSelect: [
        { label: 'True', value: true },
        { label: 'False', value: false }
      ],
      modeSelect: [
        { label: 'Original', value: 0 },
        { label: 'Current', value: 1 }
      ],
      dstSelect: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ],
      securitySpecificationModeSelect: [
        { label: 'Default', value: 'DEFAULT' },
        { label: 'Column Based', value: 'COLUMN-BASED' },
        { label: 'Random', value: 'RANDOM' }
      ],
      importModeSelect: [
        { label: 'Standard', value: 'STANDARD' },
        { label: 'Validate', value: 'VALIDATE' }
      ],
      timeZonesList: TimeZones,
      isDialogVisible: false,
      dialogType: 'error',
      dialogMessage: '',
      isDismissible: true,
      loading: false,
      p: {
        debug: 'OFF',
        osType: 'WIN',
        i2Home: 'C:/IBM/i2analyze',
        i2Schema: 'C:/IBM/i2analyze/toolkit/configuration/fragments/common/WEB-INF/classes/eiaenduser.xml',
        i2ChartingSchema: 'C:/IBM/i2analyze/toolkit/configuration/fragments/common/WEB-INF/classes/eiaenduser-ChartingSchemes.xml',
        i2MetadataFilename: 'Master.properties',
        i2SchemaSourceDir: 'C:/IBM/i2analyze/i2Ingest',
        i2DatabaseName: 'ISTORE',
        DB2Username: 'db2admin',
        DB2Password: 'db2admin',
        stagingSchemaName: 'IS_STAGING',
        createChartingSchema: false,
        processingMode: 1,
        useGenericEntity: false,
        genericEntityPrefix: 'GT0',
        CSVColumnDelimiter: ',',
        timeZone: 'America/New_York',
        dst: 0,
        originType: 'CSV',
        dataSource: 'Master',
        securitySpecificationMode: 'DEFAULT',
        isSecurityDimensionValuesColumnsVisible: false,
        securityDimensionValuesColumns: '<COLS IN XLS>',
        isSecurityDimensionValuesVisible: true,
        securityDimensionValues: 'UC, OSI',
        OIMPSourceFolder: 'C:/IBM/i2analyze/i2Ingest/OIMP',
        CSVFolder: 'C:/IBM/i2analyze/i2Ingest/CSV',
        CSVTypes: 'Master',
        CSVLinkTypes: 'Master',
        importMode: 'STANDARD',
        logFolder: 'C:/IBM/i2analyze/i2Ingest/LOGS',
        SQLScriptFolder: 'C:/IBM/i2analyze/i2Ingest/SQL',
        timeStamp: '',
        date: ''
      }
    }
  },
  methods: {
    onSecuritySpecificationModeChange () {
      if (this.p.securitySpecificationMode === 'COLUMN-BASED') {
        this.p.isSecurityDimensionValuesColumnsVisible = true
        this.p.isSecurityDimensionValuesVisible = false
      } else if (this.p.securitySpecificationMode === 'DEFAULT') {
        this.p.isSecurityDimensionValuesColumnsVisible = false
        this.p.isSecurityDimensionValuesVisible = true
      } else {
        this.p.isSecurityDimensionValuesColumnsVisible = false
        this.p.isSecurityDimensionValuesVisible = false
      }
    },
    generateConfigFile () {
      this.isDialogVisible = false
      this.loading = true
      this.encodePassword()
      this.generateTimeStamp()
      let configFileContent = template
      for (let [key, value] of Object.entries(this.p)) {
        configFileContent = configFileContent.replace('{{' + key + '}}', value)
      }
      this.writeConfigFile(configFileContent)
    },
    writeConfigFile (data = '') {
      const CONFIG_FILE_NAME = 'i2Config.properties'
      fs.writeFile(path.join(this.p.i2SchemaSourceDir, CONFIG_FILE_NAME), data, (err) => {
        if (err) {
          this.showDialog('error', 'Failed to create configuration file with error: \n' + err)
          this.loading = false
          return
        }
        this.showDialog('success', 'Configuration file created at location: ' + this.p.i2SchemaSourceDir)
        this.loading = false
      })
    },
    showDialog (type = 'error', message) {
      this.dialogType = type
      this.dialogMessage = message
      this.isDialogVisible = true
    },
    encodePassword () {
      this.p.DB2Password = btoa(this.p.DB2Password)
      // In order to decode the Base 64 encoded password above, use the method atob() is JavaScript
    },
    generateTimeStamp () {
      const today = new Date()
      const month = today.getMonth() + 1
      const date = today.getFullYear() + '-' + month + '-' + today.getDate()
      const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      this.p.timeStamp = date + ' ' + time
      this.p.date = date
    }
  }
}
</script>

<style scoped>
.right {
  text-align: right;
}
</style>
