import {Gulpclass, Task} from "gulpfile.ts/Annotations";
import * as gulp from "gulp";
import * as mocha from "gulp-mocha"; 
import * as typescript from "gulp-typescript"; 
import * as runSequence from "run-sequence"; 
 



@Gulpclass()
export class Gulpfile {

    public presentationScriptsDir = 'Source/';
    public  testScriptsDir = 'Test/';
    public  allDir = '**/';
    public  allTypeScripts = [
        this.allDir + '*.ts' /*,
        definitelyTypedDefinitions*/
    ];
    public  typeScriptGlob = [
        this.presentationScriptsDir + '**/*.ts' /*,
        definitelyTypedDefinitions*/
    ];
    public  javaScriptTestGlob = [
        this.presentationScriptsDir + this.testScriptsDir + '**/*.js'
    ];
    public  typeScriptTestGlob = [
        this.presentationScriptsDir + this.testScriptsDir + '**/*.ts'
    ];
    public  tsProject = typescript.createProject({
        removeComments: true,
        target: 'ES5',
        module: 'commonjs',
        noExternalResolve: false,
        noImplicitAny: false,
    });
 
    @Task()
    testJavaScript(cb: Function) {
        return gulp.src(this.javaScriptTestGlob, { read: false })
        .pipe(mocha());
    }
 
    @Task()
    compileTypeScript() {
        return gulp.src(this.typeScriptGlob)
        .pipe(typescript(this.tsProject))
        .pipe(gulp.dest(this.presentationScriptsDir));
    }
 
    @Task() // you can specify custom task name if you need 
    compileAndTestTypeScript() {
        return runSequence('compileTypeScript', 'testJavaScript');
    }
 
    @Task() // this special annotation using "run-sequence" module to run returned tasks in sequence 
    watchTypeScript() {
        gulp.watch(this.typeScriptGlob, ["compileAndTest-TypeScript"]);
    }

    @Task()
    scripts() { // because this task has "default" name it will be run as default gulp task 
        const tsResult = this.tsProject.src()
        .pipe(this.tsProject());
        return tsResult.js.pipe(gulp.dest('dist'));
    }

    @Task()
    watch() { // because this task has "default" name it will be run as default gulp task 
        gulp.watch('src/**/*.ts', ['scripts']);
    } 
 
    @Task()
    default() { // because this task has "default" name it will be run as default gulp task 
        return ['watch'];
    }
 
}