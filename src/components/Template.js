export default `
[i2Properties]
DEBUG = {{debug}}
OSTYPE = {{osType}}
i2HOME = {{i2Home}}
i2SCHEMA = {{i2Schema}}
i2CHARTINGSCHEMA = {{i2ChartingSchema}}
i2METADATA = {{i2MetadataFilename}}
i2RESULTSCONFIGRESOURCE = 
i2SCHEMA_SOURCE_DIR = {{i2SchemaSourceDir}}
i2SERVER = opal-server
i2DBNAME = {{i2DatabaseName}}
i2DB2USER = {{DB2Username}}
i2DB2PWD  = {{DB2Password}}
i2DB2_STAGING_SCHEMA  = {{stagingSchemaName}}
CREATECHARTINGSCHEMA = {{createChartingSchema}}
MODE = {{processingMode}}
GENERIC_ENTITY = {{useGenericEntity}}
GENERIC_ENTITY_PREFIX = {{genericEntityPrefix}}
CSVCOLDELIMITER={{CSVColumnDelimiter}}

[TimeZone]
DEFAULT_TIMEZONE = "{{timeZone}}"
DST_USED = {{dst}}    

[Format]
TIMESTAMP = {{timeStamp}}
DATE = {{date}}

[DataSource]
originIdType = {{originType}}   
dataSourceName = {{dataSource}} 

[Security]
securitySpecificationMode = {{securitySpecificationMode}}    
securityDimensionValuesColumns = {{securityDimensionValuesColumns}}
securityDimensionValues = {{securityDimensionValues}} 

[Input]
OIMPFolder = {{OIMPSourceFolder}}
CSVFolder = {{CSVFolder}}
CSVTypes = {{CSVTypes}}
CSVLinkTypes = {{CSVLinkTypes}}
MappingFiles = eiaenduser.xml.EntityMapping.xml,eiaenduser.xml.LinkMapping.xml
ImportMode = {{importMode}}

[Output]
LOGFolder = {{logFolder}}
SQLSCRIPTFolder = {{SQLScriptFolder}}
`
