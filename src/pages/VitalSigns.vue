<template>
    <el-row>
          <el-button-group style="margin-left: 20px;">
               <el-button plain type="primary" @click="createVitalSigns()">编码添加三测单</el-button>
               <el-button plain type="primary" @click="execCommand('preview')">打印预览</el-button>
               <el-button plain type="primary" @click="execCommand('print')">打印</el-button>
          </el-button-group>
     </el-row>
     <Editor @BeforeInit="onBeforeInit"  @AfterInit="onAfterInit" style="margin: 10px 0;"></Editor>
     <Source src="/code/VitalSigns.vue"></Source>

</template>
    
<script setup>
    import Editor from '@/components/Editor.vue'
    import Source from '@/components/Source.vue'

    let editor = null
    //初始化后
    const onAfterInit = function(e) {
        editor = e.editor
        e.editor.execCommand('new')
    }

    //文档命令
    const execCommand = (cmd) => {
        editor.execCommand(cmd)
    }
    //添加三测单
    const createVitalSigns = () => {
        let data = `
            {
                "name": "测试",
                "inDate": "2023-08-01",
                "diag": "新型冠状病毒肺炎",
                "dept": "呼吸内科",
                "bed": "801",
                "medicalNo": "202300991",
                "begin": "2023-08-01",
                "operateDate": "2023-08-03",
                "notes": "入院-十时二十分,,转入ICU,,,,,,,手术,,,,,,,,,,,,,,,,,,出院,,,,死亡于×时×分",
                "sphygmus": "112,110,109,103,108,85,90,83,90,103,108,85,90,83,90,95,90,83,90,103,108,85,90,83,90",
                "heart": "112,120,118,111,,,,112,,,112,120,118,111,,,,,100,112,,,100",
                "tempType": "0",
                "temperature": "38.7,37.3,38.5,37.5,37.5,37.5,,,36.5,37.5,37.4,36.8,,36.5,,34.8,,34.9,34.8,,37.0,,,36.5,36.8,36.9,37.1",
                "breath": "30,30,R,,35,35,35,35,35,35,35,35,,R,R,35,35,,R,,,35,35,,R",
                "labels": "血压(mmHg)|入水量(ml)|出水量(ml)|大便(次)|小便(次)|身高(cm)|体重(kg)|过敏药",
                "data1": "120/85,121/84,,110/75,",
                "data2": "1180ml,,,500ml,,40ml",
                "data3": "500ml,,,,500ml,,67ml",
                "data4": "2,4,5,3,3,3,2,,2",
                "data5": "2,4,5,3,3,3,2,,2",
                "data6": "167cm,,,,,,,,,164cm",
                "data7": "95kg,,,,,90kg",
                "data8": "青霉素,"
            }
        `
        editor.createVitalSigns(JSON.parse(data))
    }
</script>