class Task{
    constructor(task, create, mytask, spanI, description, reset, created, done, tabContent, expiredTask, expiredTaskList, taskDate, removeAll){
        this.task = task;
        this.create = create;
        this.mytask = mytask;
        this.spanI = spanI;
        this.description = description;
        this.reset = reset;
        this.created = created;
        this.done = done;
        this.tabContent = tabContent;
        this.expiredTask = expiredTask;
        this.expiredTaskList = expiredTaskList;
        this.taskDate = taskDate;
        this.removeAll = removeAll;
        let dateSpanContainer = document.querySelector('.calendar_date');
        let count
        if (localStorage.getItem('items')) {
            let datLok = JSON.parse(localStorage.getItem('items'));
                console.log(datLok.length)
                count = datLok.length
                console.log(count)
        }else{
            count = 0
        }
        
        this.createLocalTask();
        document.querySelector('.burg_meny').classList.add('border');
        this.create.addEventListener('click', () => {
            if (this.task.value && this.description.value && dateSpanContainer.innerText) {
                        count++
            }else{
               
            }
            let myCalendar = document.querySelector('.my_calendar')
            this.creates(this.task.value, this.description.value, dateSpanContainer.innerText, count), 
               myCalendar.classList.toggle('vis_cal')
            setTimeout(()=>{
                 myCalendar.style.display = 'none';
                },300)
        });
        //this.curentDate();
        this.addmenu()
        this.addCreate();
        this.invDate();
        this.hideCalendar();

        this.reset.addEventListener('click', (e)=> {this.task.classList.remove('btn_active'),
            this.description.classList.remove('btn_description_active'),
            this.task.value = '',
            this.description.value = '';
            
        });

        this.spanI.addEventListener('click', ()=>{
            let addCreateBtn = document.querySelector('.burg_meny');
            let transformary = document.querySelector('.transformary')
            let rightListItem = document.querySelector('.todo_init_title');

                transformary.style.transform = 'rotate(0)';
                addCreateBtn.classList.add('color');
                rightListItem.classList.add('hiden');
                rightListItem.style.transform = 'translateX(-800px)';
                document.querySelector('.burg_meny').style.border = '1px dashed rgba(190, 190, 190, 0)';
                this.spanI.classList.add('border');
                setTimeout(()=>{
                    rightListItem.style.opacity = '0';
                    rightListItem.style.display = 'none'
                },500)

                setTimeout(()=>{
                    this.tabContent.style.display = 'flex';
                 }, 600);
                
                setTimeout(()=>{
                    this.tabContent.style.transform = 'translateX(0)';
                }, 700);

            this.done.style.transform = 'translateX(800px)';
            this.expiredTaskList.style.transform = 'translateX(800px)';
            setTimeout(() => {
                 this.done.classList.remove('visible');
                 this.expiredTaskList.classList.remove('visible');
            }, 300);
            this.created.classList.remove('border');
            this.expiredTask.classList.remove('border');
            this.spanI.classList.add('border'); 
            setTimeout(()=>{
                this.mytask.style.display = 'flex'; 
             }, 400);
            
            setTimeout(()=>{
               this.mytask.classList.remove('hide');
            }, 500);
        });
        this.created.addEventListener('click', (e)=>{
            this.mytask.classList.add('hide');
            this.expiredTaskList.style.transform = 'translateX(800px)';
            this.created.classList.add('border');
            this.spanI.classList.remove('border');
            this.expiredTask.classList.remove('border');
            let addCreateBtn = document.querySelector('.burg_meny');
            let transformary = document.querySelector('.transformary')
            let rightListItem = document.querySelector('.todo_init_title');

                transformary.style.transform = 'rotate(0)';
                addCreateBtn.classList.add('color');
                rightListItem.classList.add('hiden');
                rightListItem.style.transform = 'translateX(-800px)';
                //document.querySelector('.burg_meny').classList.remove('border');
                document.querySelector('.burg_meny').style.border = '1px dashed rgba(190, 190, 190, 0)';
                this.spanI.classList.remove('border');
                setTimeout(()=>{
                    rightListItem.style.opacity = '0';
                    rightListItem.style.display = 'none'
                },500)

                setTimeout(()=>{
                    this.tabContent.style.display = 'flex';
                 }, 600);
                
                setTimeout(()=>{
                    this.tabContent.style.transform = 'translateX(0)';
                }, 700);
            
            setTimeout(()=>{
                this.mytask.style.display = 'none';
                this.done.classList.add('visible');
                this.expiredTaskList.classList.remove('visible');
            }, 500);
            setTimeout(() => {
                this.done.style.transform = 'translateX(0)';
            }, 600); 
        });

        this.expiredTask.addEventListener('click', ()=>{
            this.done.style.transform = 'translateX(-800px)';
            this.mytask.classList.add('hide');
            this.spanI.classList.remove('border');
            this.created.classList.remove('border');
            this.expiredTask.classList.add('border');
            let addCreateBtn = document.querySelector('.burg_meny');
            let transformary = document.querySelector('.transformary')
            let rightListItem = document.querySelector('.todo_init_title');

                transformary.style.transform = 'rotate(0)';
                addCreateBtn.classList.add('color');
                rightListItem.classList.add('hiden');
                rightListItem.style.transform = 'translateX(-800px)';
                //document.querySelector('.burg_meny').classList.remove('border');
                document.querySelector('.burg_meny').style.border = '1px dashed rgba(190, 190, 190, 0)';
                setTimeout(()=>{
                    rightListItem.style.opacity = '0';
                    rightListItem.style.display = 'none'
                },500)

                setTimeout(()=>{
                    this.tabContent.style.display = 'flex';
                 }, 600);
                
                setTimeout(()=>{
                    this.tabContent.style.transform = 'translateX(0)';
                }, 700);
            setTimeout(()=>{
                this.mytask.style.display = 'none';
                this.done.classList.remove('visible');
                this.expiredTaskList.classList.add('visible'); 
             }, 400);
            
             setTimeout(() => {
                this.expiredTaskList.style.transform = 'scale(1)';
            }, 600); 
        });
        this.removeAll.addEventListener('click', ()=>{
            this.removeAllTask();
        })
    }
    addmenu(){
        let first = document.querySelector('.burg_meny')
        let second = document.querySelector('.inform')
        let third = document.querySelector('.created_task')
        let four = document.querySelector('.expired_task')

        document.querySelector('.main_meny').addEventListener('click', ()=>{
            if (document.querySelector('.task_tabs_menu').classList.contains('visible_bttn')) {
                document.querySelector('.main_meny').style.color = 'rgb(255, 255, 255)';
                setTimeout(()=>{
                    document.querySelector('.task_tabs_menu').classList.remove('visible_bttn');
                }, 900)
                setTimeout(() => {
                    first.style.transform = 'scale(0)'
                   }, 100);
                   setTimeout(() => {
                    second.style.transform = 'scale(0)'
                   }, 300);
                   setTimeout(() => {
                    third.style.transform = 'scale(0)'
                   }, 500);
                   setTimeout(() => {
                    four.style.transform = 'scale(0)'
                   }, 700);
            }else {
                document.querySelector('.main_meny').style.color = 'rgba(207, 43, 22, 0.897)'
                document.querySelector('.task_tabs_menu').classList.add('visible_bttn');
                setTimeout(() => {
                    first.style.transform = 'scale(1)'
                   }, 400);
                   setTimeout(() => {
                    second.style.transform = 'scale(1)'
                   }, 500);
                   setTimeout(() => {
                    third.style.transform = 'scale(1)'
                   }, 700);
                   setTimeout(() => {
                    four.style.transform = 'scale(1)'
                   }, 900);
            }  
        })
    }

    addCreate(){
        let addCreateBtn = document.querySelector('.burg_meny');
        let transformary = document.querySelector('.transformary')
        let rightListItem = document.querySelector('.todo_init_title');
        addCreateBtn.addEventListener('click', ()=>{
                document.querySelector('.burg_meny').classList.add('border');
                document.querySelector('.burg_meny').style.border = '1px dashed rgb(190, 190, 190)';
                this.spanI.classList.remove('border');
                this.created.classList.remove('border');
                this.expiredTask.classList.remove('border');
                transformary.style.transform = 'rotate(45deg)';
                addCreateBtn.classList.remove('color');
                this.tabContent.style.transform = 'translateX(800px)';
                setTimeout(()=>{
                    this.tabContent.style.display = 'none';
                },200)
                setTimeout(()=>{
                    rightListItem.style.display = 'flex';
                    rightListItem.classList.remove('hiden');
                },400)
                
                setTimeout(()=>{
                    rightListItem.style.transform = 'scale(1)';
                    rightListItem.style.opacity = '1'
                },600)
            
        })
    }
    hideCalendar(){
        document.querySelector('.main').addEventListener('click', (e)=>{
            let call = document.querySelector('.my_calendar');
            if (call.classList.contains('vis_cal') && e.target !== call) {
               
            setTimeout(()=>{
                //call.style.display = 'none';
                call.classList.remove('vis_cal')
                },200) 
            }else{
            }
            
        })
    }
    invDate(){
        let invDate = document.querySelector('.calendar_plus');
        let myCalendar = document.querySelector('.my_calendar');
        invDate.addEventListener('click', ()=>{
                myCalendar.style.display = 'flex';
            setTimeout(()=>{
                myCalendar.classList.toggle('vis_cal')
                },200)   
        })
    }
    //------------------------------Create Task From LocalStorage
    createLocalTask(){
        let datLok
        if (localStorage.getItem('items')) {
            datLok = JSON.parse(localStorage.getItem('items'));
            datLok.forEach(item => {  
                
        let p = document.createElement('p');
                p.className = 'inf__text';
                p.innerHTML = (item.name);
                p.setAttribute('contentEditable', 'false');

            let titleDescription = document.createElement('div');
                titleDescription.className = 'title_description';
                titleDescription.innerHTML = (item.deskriptionTask);

            let createdData =  document.createElement('input');
                createdData.className = 'create_task';
                createdData.value = (new Date(item.dateValue));

            let buttonDelete = document.createElement('button');
                buttonDelete.className = 'delete';
                buttonDelete.innerHTML = '<i class="far fa-trash-alt"></i>';
            
            let button = document.createElement('button');
                button.className = 'remove';
                button.innerHTML = '<i class="fas fa-check"></i>';

            let btnCancel = document.createElement('button');
                btnCancel.className = 'cancel';
                btnCancel.innerHTML = '<i class="fas fa-redo"></i>';

            let btnWrite = document.createElement('button');
                btnWrite.className = 'write';
                btnWrite.innerHTML = '<i class="fas fa-feather-alt"></i>';

            let position = document.createElement('div');
                position.className = 'position';
                position.appendChild(button);
                position.appendChild(btnCancel);

            let navi = document.createElement('div');
                navi.className = 'navi_btn';
                navi.appendChild(buttonDelete);
                navi.appendChild(position);
                navi.appendChild(btnWrite);
            
            let titleTodo = document.createElement('div');
                titleTodo.className = 'title_todo';
                titleTodo.appendChild(p);
                titleTodo.appendChild(titleDescription);

            let div = document.createElement('div');
                div.className = 'inf__div';
                div.dataset.id = "1";
                div.dataset.number = item.dataCount
                div.appendChild(createdData);
                div.appendChild(titleTodo);
                div.appendChild(navi);

                let greens = document.querySelector('.green');
                let greensrt = document.querySelector('.created_task .green');
                let greenExpT = document.querySelector('.expired_task .green');
                let childT = this.mytask.children;
                let childCreated = this.done.children;
                let childExp = this.expiredTaskList.children;
                setTimeout(()=>{
                    if (childT.length > 0) {
                        greens.style.opacity = '1'
                     }else{
                        greens.style.opacity = '0'
                     }
                },500);

                setTimeout(()=>{
                    if (childT.length > 0) {
                        greens.style.opacity = '1';
                     }else{
                        greens.style.opacity = '0';
                     }
                },300);
                setTimeout(()=>{
                    if (childExp.length > 0) {
                        greenExpT.style.opacity = '1';
                    }else{
                        greenExpT.style.opacity = '0';
                    }
                },300);
                setTimeout(()=>{
                    if (childCreated.length > 0) {
                        greensrt.style.opacity = '1';
                     }else{
                        greensrt.style.opacity = '0';
                     }
                },400)
                
                //console.log('dates', {itemDate: new Date(item.dateValue), currentDate:new Date(), condition: new Date(item.dateValue) < new Date()})
                
                if (item.dataId == "3") {
                    document.querySelector('.expired_task_list').appendChild(div);
                    div.classList.remove('inf__div_active');
                        div.dataset.id = "3";
                    position.remove();
                    btnWrite.remove();
                    p.classList.add('active');
                    titleDescription.classList.add('active');
                    createdData.classList.add('active');             
                }else if (item.dataId == "2") {
                    setTimeout(() => {
                        done.appendChild(div);
                        div.classList.add('inf__div_active');
                    },300)
                    button.style.transform = 'scale(0)';
                        p.classList.add('active');
                        titleDescription.classList.add('active');
                        div.classList.remove('inf__div_active');
                        div.classList.add('borderBT');
                        setTimeout(function () {
                            btnCancel.style.transform = 'scale(1)';
                        },300);
                }
                if (item.dataId == "1") {
                    this.mytask.appendChild(div);
                }
                setTimeout(function () {
                    div.classList.add('inf__div_active');
                },200)
                button.onclick = function () {
                    let done = document.querySelector('.created_list');
                    let expiredTaskList = document.querySelector('.expired_task_list');
                        div.classList.remove('inf__div_active');
                        
                        if (new Date(item.dateValue).getMonth() <= new Date().getMonth() && new Date(item.dateValue).getDate() < new Date().getDate()) { 
                            setTimeout(() => {
                                expiredTaskList.appendChild(div);
                                div.dataset.id = "3"
                                div.classList.add('inf__div_active');
                                setTimeout(()=>{
                                    if (childT.length > 0) {
                                        greens.style.opacity = '1';
                                     }else{
                                        greens.style.opacity = '0';
                                     }
                                },300);
                                setTimeout(()=>{
                                    if (childExp.length > 0) {
                                        greenExpT.style.opacity = '1';
                                    }else{
                                        greenExpT.style.opacity = '0';
                                    }
                                },300);
                                let target = event.target;
                                let parent1 = target.parentElement;
                                let parent2 = parent1.parentElement
                                let parent3 = parent2.parentNode;
                                let parent4 = parent3.parentNode;
                                    console.log(parent4)

                                let currentList = JSON.parse(localStorage.getItem('items'))
                                    currentList.forEach(user=> {
                                        console.log(user.dataCount)
                                        console.log(parent4.dataset.number)
                                    if(user.dataCount === parent4.dataset.number) {
                                        user.dataId = 3;
                                    }
                                    })
                                    localStorage.setItem('items', JSON.stringify(currentList))
                            }, 400);
                            position.remove();
                            btnWrite.remove();
                            p.classList.add('active');
                            titleDescription.classList.add('active');
                            createdData.classList.add('active');
                            
                        }else{
                            div.classList.add('borderBT');
                            div.dataset.id = "2";
                            setTimeout(() => {
                                done.appendChild(div);
                                div.classList.add('inf__div_active');
                                div.dataset.id = "2";
                                setTimeout(()=>{
                                    if (childT.length > 0) {
                                        greens.style.opacity = '1';
                                     }else{
                                        greens.style.opacity = '0';
                                     }
                                },300);
                                setTimeout(()=>{
                                    if (childCreated.length > 0) {
                                        greensrt.style.opacity = '1';
                                     }else{
                                        greensrt.style.opacity = '0';
                                     }
                                },400)
                                setTimeout(()=>{
                                    if (childExp.length > 0) {
                                        greenExpT.style.opacity = '1';
                                    }else{
                                        greenExpT.style.opacity = '0';
                                    }
                                },300);
                            }, 400);

                            let target = event.target;
                            let parent1 = target.parentElement;
                            let parent2 = parent1.parentElement
                            let parent3 = parent2.parentNode;
                            let parent4 = parent3.parentNode;
                                console.log(parent4)

                            let currentList = JSON.parse(localStorage.getItem('items'))
                                currentList.forEach(user=> {
                                    console.log(user.dataCount)
                                    console.log(parent4.dataset.number)
                                if(user.dataCount === parent4.dataset.number) {
                                    user.dataId = 2;
                                }
                                })
                                localStorage.setItem('items', JSON.stringify(currentList))
                            
                            button.style.transform = 'scale(0)';
                            p.classList.add('active');
                            titleDescription.classList.add('active');
                            setTimeout(function () {
                                btnCancel.style.transform = 'scale(1)';
                            },300);
                        }           
                }
                btnCancel.onclick = function () {
                    div.dataset.id = "1";
                     let mytask = document.querySelector('.my_task');
                        div.classList.remove('inf__div_active');
                        div.classList.remove('borderBT');
                       
                        setTimeout(() => {
                            mytask.appendChild(div);
                            div.classList.add('inf__div_active');
                        }, 300);

                        let target = event.target;
                                let parent1 = target.parentElement;
                                let parent2 = parent1.parentElement
                                let parent3 = parent2.parentNode;
                                let parent4 = parent3.parentNode;
                                    console.log(parent4)

                                let currentList = JSON.parse(localStorage.getItem('items'))
                                    currentList.forEach(user=> {
                                        console.log(user.dataCount)
                                        console.log(parent4.dataset.number)
                                    if(user.dataCount === parent4.dataset.number) {
                                        user.dataId = 1;
                                    }
                                    })
                                    localStorage.setItem('items', JSON.stringify(currentList))
                        
                        btnCancel.style.transform = 'scale(0)';
                        p.classList.remove('active');
                        titleDescription.classList.remove('active');
                    setTimeout(function () {
                        button.style.transform = 'scale(1)';
                    },300);
                    setTimeout(()=>{
                        if (childT.length > 0) {
                            greens.style.opacity = '1';
                         }else{
                            greens.style.opacity = '0';
                         }
                    },400);
                    setTimeout(()=>{
                        if (childCreated.length > 0) {
                            greensrt.style.opacity = '1';
                         }else{
                            greensrt.style.opacity = '0';
                         }
                    },400)
                }
                buttonDelete.addEventListener('click', function () {
                    div.classList.remove('inf__div_active');
                    setTimeout(function () {
                        div.remove();
                    },500);
                    setTimeout(()=>{
                        if (childT.length > 0) {
                            greens.style.opacity = '1';
                         }else{
                            greens.style.opacity = '0';
                         }
                    },600);
                    setTimeout(()=>{
                        if (childCreated.length > 0) {
                            greensrt.style.opacity = '1';
                         }else{
                            greensrt.style.opacity = '0';
                         }
                    },600);
                    setTimeout(()=>{
                        if (childExp.length > 0) {
                            greenExpT.style.opacity = '1'
                        }else{
                            greenExpT.style.opacity = '0'
                        }
                    },600); 
                    let target = event.target;
                    let parent1 = target.parentElement;
                    let parent2 = parent1.parentElement
                    let parent3 = parent2.parentNode;
                        console.log(parent3)

                    let currentList = JSON.parse(localStorage.getItem('items'))
                        currentList.forEach(user=> {
                            console.log(user.dataCount)
                        if(user.dataCount === parent3.dataset.number) {
                            user.dataId = 0;
                        }
                        })
                        localStorage.setItem('items', JSON.stringify(currentList)) 
                });
                btnWrite.addEventListener('click', function (e) {
                    let pAttribute = p.getAttribute('contentEditable')
                    if (pAttribute == 'false') {
                        p.setAttribute('contentEditable', 'true');
                        p.classList.add('writting_text');
                        titleDescription.classList.add('writting_text');
                        titleDescription.setAttribute('contentEditable', 'true');
    
                        //btnWrite.classList.add('bc_color');
                        btnWrite.style.color = 'red';
                    }else{
                        p.setAttribute('contentEditable', 'false');
                        titleDescription.setAttribute('contentEditable', 'false');
                        btnWrite.classList.remove('bc_color');
                        p.classList.remove('writting_text');
                        titleDescription.classList.remove('writting_text');
                        btnWrite.style.color = 'var(--color-main)';
                        let target = event.target;
                    let parent1 = target.parentElement;
                    let parent2 = parent1.parentElement
                    let parent3 = parent2.parentNode;
                        console.log(parent3)
                        let currentList = JSON.parse(localStorage.getItem('items'))
                        currentList.forEach(user=> {
                        console.log(user.dataCount)
                        if(user.dataCount === parent3.dataset.number) {
                            user.name = p.innerHTML,
                            user.deskriptionTask = titleDescription.innerHTML
                        }
                        })
                        localStorage.setItem('items', JSON.stringify(currentList))
                    }
                })
            })
            } else {
                datLok = []
              }
    }
    //------------------------------------------------------------------------------
    //-------------------------------------Create New Task
    creates(pValue, descriptionValye, taskDateValue, count){
        if (this.task.value == '' || this.description.value == '' || taskDateValue == '') {
            this.task.classList.add('btn_active');
            this.description.classList.add('btn_description_active');
        }else{
            this.task.classList.remove('btn_active');
            this.description.classList.remove('btn_description_active');
        
            let p = document.createElement('p');
                p.className = 'inf__text';
                p.innerHTML = (pValue);
                p.setAttribute('contentEditable', 'false');
            
                let titleDescription = document.createElement('div');
                titleDescription.className = 'title_description';
                titleDescription.innerHTML = (descriptionValye);

            let createdData =  document.createElement('input');
                createdData.className = 'create_task';
                createdData.value = (taskDateValue);

            let buttonDelete = document.createElement('button');
                buttonDelete.className = 'delete';
                buttonDelete.innerHTML = '<i class="far fa-trash-alt"></i>';
            
            let button = document.createElement('button');
                button.className = 'remove';
                button.innerHTML = '<i class="fas fa-check"></i>';

            let btnCancel = document.createElement('button');
                btnCancel.className = 'cancel';
                btnCancel.innerHTML = '<i class="fas fa-redo"></i>';

            let btnWrite = document.createElement('button');
                btnWrite.className = 'write';
                btnWrite.innerHTML = '<i class="fas fa-feather-alt"></i>';

            let position = document.createElement('div');
                position.className = 'position';
                position.appendChild(button);
                position.appendChild(btnCancel);

            let navi = document.createElement('div');
                navi.className = 'navi_btn';
                navi.appendChild(buttonDelete);
                navi.appendChild(position);
                navi.appendChild(btnWrite);
            
            let titleTodo = document.createElement('div');
                titleTodo.className = 'title_todo';
                titleTodo.appendChild(p);
                titleTodo.appendChild(titleDescription);

            let div = document.createElement('div');
                div.className = 'inf__div';
                div.dataset.id = "1";
                div.dataset.number = count
                div.appendChild(createdData);
                div.appendChild(titleTodo);
                div.appendChild(navi);
                

                setTimeout(function () {
                    div.classList.add('inf__div_active');
                },200) 
                this.mytask.appendChild(div);
                let greens = document.querySelector('.green');
                let greensrt = document.querySelector('.created_task .green');
                let greenExpT = document.querySelector('.expired_task .green');
                let childT = this.mytask.children;
                let childCreated = this.done.children;
                let childExp = this.expiredTaskList.children;
                setTimeout(()=>{
                    if (childT.length > 0) {
                        greens.style.opacity = '1'
                     }else{
                        greens.style.opacity = '0'
                     }
                },500)
                 //---------------------------------------local
                 let u = {
                    name:pValue,
                    deskriptionTask:descriptionValye,
                    dateValue: new Date(taskDateValue),
                    dataId: div.dataset.id,
                    dataCount: div.dataset.number
                 }
                 
            let user = {
                name:u.name,
                deskriptionTask:u.deskriptionTask,
                dateValue: u.dateValue,
                dataId: u.dataId,
                dataCount: u.dataCount
            };
                 // Добавление элемента из localstorage

                let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
                    itemsArray.push(user)
                    localStorage.setItem('items', JSON.stringify(itemsArray)) 
             //------------------------------------------local
            //this.createLocalTask();
            this.task.value = '';
            this.description.value = '';
            this.taskDate.value = '';
            this.taskDate.innerHTML = '';

            button.onclick = function (e) {
                div.dataset.id = "2";
                let done = document.querySelector('.created_list');
                let expiredTaskList = document.querySelector('.expired_task_list');
                let createdDataValue = new Date(createdData.value);
                    div.classList.remove('inf__div_active');
                    
                    if (new Date(createdDataValue) <= new Date()) {
                        let target = event.target;
                        let parent1 = target.parentElement;
                        let parent2 = parent1.parentElement
                        let parent3 = parent2.parentNode;
                        let parent4 = parent3.parentNode;

                        let currentList = JSON.parse(localStorage.getItem('items'))
                                currentList.forEach(user=> {
                                    console.log(user.dataCount)
                                    console.log(parent4.dataset.number)
                                if(user.dataCount === parent4.dataset.number) {
                                user.dataId = 3;
                                }
                                })
                            localStorage.setItem('items', JSON.stringify(currentList))
                        setTimeout((e) => {
                            expiredTaskList.appendChild(div);
                            div.dataset.id = "3"
                            div.classList.add('inf__div_active');
                            setTimeout(()=>{
                                if (childT.length > 0) {
                                    greens.style.opacity = '1';
                                 }else{
                                    greens.style.opacity = '0';
                                 }
                            },300);
                            setTimeout(()=>{
                                if (childExp.length > 0) {
                                    greenExpT.style.opacity = '1';
                                }else{
                                    greenExpT.style.opacity = '0';
                                }
                            },300);
                           
                        }, 400);
                        position.remove();
                        btnWrite.remove();
                        p.classList.add('active');
                        titleDescription.classList.add('active');
                        createdData.classList.add('active');
                        
                    }else{
                        div.classList.add('borderBT');
                        
                        let target = event.target;
                        let parent1 = target.parentElement;
                        let parent2 = parent1.parentElement
                        let parent3 = parent2.parentNode;
                        let parent4 = parent3.parentNode;

                        let currentList = JSON.parse(localStorage.getItem('items'))
                                currentList.forEach(user=> {
                                    console.log(user.dataCount)
                                    console.log(parent4.dataset.number)
                                if(user.dataCount === parent4.dataset.number) {
                                user.dataId = 2;
                                }
                                })
                            localStorage.setItem('items', JSON.stringify(currentList))
                            

                        setTimeout(() => {
                            done.appendChild(div);
                            div.classList.add('inf__div_active');
                            setTimeout(()=>{
                                if (childT.length > 0) {
                                    greens.style.opacity = '1';
                                 }else{
                                    greens.style.opacity = '0';
                                 }
                            },300);
                            setTimeout(()=>{
                                if (childCreated.length > 0) {
                                    greensrt.style.opacity = '1';
                                 }else{
                                    greensrt.style.opacity = '0';
                                 }
                            },500)
                        }, 400);
                        
                        button.style.transform = 'scale(0)';
                        p.classList.add('active');
                        titleDescription.classList.add('active');
                        setTimeout(function () {
                            btnCancel.style.transform = 'scale(1)';
                        },300);
                    }             
            };
            btnCancel.onclick = function () {
                div.dataset.id = "1";
                 let mytask = document.querySelector('.my_task');
                    div.classList.remove('inf__div_active');
                    div.classList.remove('borderBT');
                   
                    setTimeout(() => {
                        mytask.appendChild(div);
                        div.classList.add('inf__div_active');
                    }, 300);

                    let target = event.target;
                            let parent1 = target.parentElement;
                            let parent2 = parent1.parentElement
                            let parent3 = parent2.parentNode;
                            let parent4 = parent3.parentNode;
                                console.log(parent4)

                            let currentList = JSON.parse(localStorage.getItem('items'))
                                currentList.forEach(user=> {
                                    console.log(user.dataCount)
                                    console.log(parent4.dataset.number)
                                if(user.dataCount === parent4.dataset.number) {
                                    user.dataId = 1;
                                }
                                })
                                localStorage.setItem('items', JSON.stringify(currentList))
                    
                    btnCancel.style.transform = 'scale(0)';
                    p.classList.remove('active');
                    titleDescription.classList.remove('active');
                setTimeout(function () {
                    button.style.transform = 'scale(1)';
                },300);
                setTimeout(()=>{
                    if (childT.length > 0) {
                        greens.style.opacity = '1';
                     }else{
                        greens.style.opacity = '0';
                     }
                },400);
                setTimeout(()=>{
                    if (childCreated.length > 0) {
                        greensrt.style.opacity = '1';
                     }else{
                        greensrt.style.opacity = '0';
                     }
                },400)
            }
            //this.btnCancel()
            //this.btnDel()
            buttonDelete.addEventListener('click', function () {
                div.classList.remove('inf__div_active');
                setTimeout(function () {
                    div.remove();
                },500);
                setTimeout(()=>{
                    if (childT.length > 0) {
                        greens.style.opacity = '1';
                     }else{
                        greens.style.opacity = '0';
                     }
                },600);
                setTimeout(()=>{
                    if (childCreated.length > 0) {
                        greensrt.style.opacity = '1';
                     }else{
                        greensrt.style.opacity = '0';
                     }
                },600);
                setTimeout(()=>{
                    if (childExp.length > 0) {
                        greenExpT.style.opacity = '1'
                    }else{
                        greenExpT.style.opacity = '0'
                    }
                },600); 
                let target = event.target;
                let parent1 = target.parentElement;
                let parent2 = parent1.parentElement
                let parent3 = parent2.parentNode;
                    console.log(parent3)

                let currentList = JSON.parse(localStorage.getItem('items'))
                    currentList.forEach(user=> {
                        console.log(user.dataCount)
                    if(user.dataCount === parent3.dataset.number) {
                        user.dataId = 0;
                    }
                    })
                    localStorage.setItem('items', JSON.stringify(currentList)) 
            });
            btnWrite.addEventListener('click', function (e) {
                let pAttribute = p.getAttribute('contentEditable')
                if (pAttribute == 'false') {
                    p.setAttribute('contentEditable', 'true');
                    p.classList.add('writting_text');
                    titleDescription.classList.add('writting_text');
                    titleDescription.setAttribute('contentEditable', 'true');

                    //btnWrite.classList.add('bc_color');
                    btnWrite.style.color = 'red';
                }else{
                    p.setAttribute('contentEditable', 'false');
                    titleDescription.setAttribute('contentEditable', 'false');
                    btnWrite.classList.remove('bc_color');
                    p.classList.remove('writting_text');
                    titleDescription.classList.remove('writting_text');
                    btnWrite.style.color = 'var(--color-main)';
                    let target = event.target;
                let parent1 = target.parentElement;
                let parent2 = parent1.parentElement
                let parent3 = parent2.parentNode;
                    console.log(parent3)
                    let currentList = JSON.parse(localStorage.getItem('items'))
                    currentList.forEach(user=> {
                    console.log(user.dataCount)
                    if(user.dataCount === parent3.dataset.number) {
                        user.name = p.innerHTML,
                        user.deskriptionTask = titleDescription.innerHTML
                    }
                    })
                    localStorage.setItem('items', JSON.stringify(currentList))
                }
            })
        }
    };
    removeAllTask(){
        localStorage.clear();
        document.querySelector('.green').style.opacity = '0'
        document.querySelector('.created_task .green').style.opacity = '0'
        document.querySelector('.expired_task .green').style.opacity = '0'
        while (this.mytask.lastElementChild) {  
            this.mytask.removeChild(mytask.lastElementChild);   
        }
        while (this.done.lastElementChild) {  
            this.done.removeChild(done.lastElementChild);   
        }  
        while (this.expiredTaskList.lastElementChild) {  
            this.expiredTaskList.removeChild(expiredTaskList.lastElementChild);   
        }      
    }
};
    const task = document.querySelector('.btn');
    const create = document.querySelector('.create');
    const mytask = document.querySelector('.my_task');
    const spanI = document.querySelector('.inform');
    const description = document.querySelector('.btn_description');
    const reset = document.querySelector('.reset');
    const created = document.querySelector('.created_task');
    const done = document.querySelector('.created_list');
    const tabContent = document.querySelector('.tabs_content');
    const expiredTask = document.querySelector('.expired_task');
    const expiredTaskList = document.querySelector('.expired_task_list');
    const taskDate = document.querySelector('.calendar_date');
    const removeAll = document.querySelector('.remove_all');

const myTask = new Task(task, create, mytask, spanI, description, reset, created, done, tabContent, expiredTask, expiredTaskList, taskDate,removeAll);

class Calendar {
	constructor() {
		this.days = [
			"Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
		];
		this.month = [
			"Январь", "Ферваль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
    
	this.date = new Date();
	this.currMonth = this.date.getMonth();
	this.currYear = this.date.getFullYear();
    this.currDay = this.date.getDate();

    this.showCurrent();
    this.currentMonth();
    this.addCurDateHandler();
		document.querySelector(".next").onclick = () => {
            this.nextMonth();
		};
		document.querySelector(".previous").onclick = () => {
			this.previousMonth();
    }   
  }

    addCurDateHandler () {
        document.querySelector('.ourTable').onclick = (e) => {
            this.addCurDate(e)
        }
    }

	showCurrent() {
		this.createCalendar(".calendar", this.currYear, this.currMonth);
	}

	previousMonth() {
		if (this.currMonth == 0) {
			this.currMonth = 11;
			this.currYear = this.currYear - 1;
		} else {
			this.currMonth = this.currMonth - 1;
		}
    this.showCurrent();
    this.currentMonth()-1;
    this.addCurDateHandler()
	}

	nextMonth() {
        let curdate = document.querySelector('.calendar_date');
        console.log(curdate.innerHTML)

		if (this.currMonth == 11) {
			this.currMonth = 0;
			this.currYear = this.currYear + 1;
		} else {
			this.currMonth = this.currMonth + 1;
        }
    this.showCurrent();
    this.currentMonth(+1)
    this.addCurDateHandler();
	}

  currentMonth(){
    let c = document.querySelector('.calendar');
    let curMYe = document.createElement('span');
        curMYe.className = 'curr_mon_year'
        curMYe.innerHTML = this.currYear + ' ' + this.month[this.currMonth];
        c.prepend(curMYe)
  }

  addCurDate(e){
    let curdate = document.querySelector('.calendar_date');
    
    let t = this.currMonth +1
    let target = event.target;
    let targetText = target.innerText;
    let noCur = target.getAttribute('class')
    let norm = document.querySelector('.ourTable')
    console.log(noCur)
    if (e.target !== norm) {
        if (noCur !== 'not_current') {
            if (t < 10) {
                curdate.innerHTML = this.currYear + '.' +'0' + t + '.' + targetText
            }else{
                curdate.innerHTML = this.currYear + '.' + t + '.' + targetText
            }  
        } else {
    
        }  
    }else{
        return
    }
  }

	createCalendar(calendar, y, m) {
		let c = document.querySelector(calendar);
		let html = '<table class="ourTable">';
		let d = new Date()
				, firstDayOfMonth = new Date(y, m, 1).getDay()
				, lastDateOfMonth = new Date(y, m + 1, 0).getDate()
				, lastDayOfLastMonth = m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();
		html += '<thead>';

		for (let i = 0; i < this.days.length; i++) {
			html += `<td class="days_of_week">${this.days[i]}</td>`;
		}

		html += '</thead>';
		html += '<tbody class = "dMonth">';
		// Write the days
		let i = 1;
		do {

			let dow = new Date(y, m, i).getDay();
			// If Sunday, start new row
			if (dow == 0) {
				html += '<tr>';
			}
			else if (i == 1) {
				html += '<tr>';
				let k = lastDayOfLastMonth - firstDayOfMonth + 1;
				for (let j = 0; j < firstDayOfMonth; j++) {
					html += '<td class="not_current">' + k + '</td>';
					k++;
				}
			}
			let chk = new Date();
			let chkY = chk.getFullYear();
			let chkM = chk.getMonth();
			let dayName = '';

			switch(dow) {
				case 0 :
					dayName = "Воскресенье";
					break;
				case 1 :
					dayName = "Понедельник";
					break;
				case 2 :
					dayName = "Вторник";
					break;
				case 3 :
					dayName = "Среда";
					break;
				case 4 :
					dayName = "Четверг";
					break;
				case 5 :
					dayName = "Пятница";
					break;
				case 6 :
					dayName = "Суббота";
					break;
				default:
					dayName = 'None';
            }

			if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
				html += '<td class="today" data-date="'+ dayName + " " + chkM + " " + chkY +'">' + i + '</td>';
			} else {
				html += '<td class="normal" data-date="'+ dayName + " " + chkM + " " + chkY +'">' + i + '</td>';
			}
			if (dow == 6) {
				html += '</tr>';
			}
			else if (i == lastDateOfMonth) {
				let k = 1;
				for (dow; dow < 6; dow++) {
					html += '<td class="not_current">' + k + '</td>';
					k++;
				}
			}
			i++;
		} while (i <= lastDateOfMonth);
		html += '</tbody>';

		html += '</table>';
		c.innerHTML = html;
	}
}
new Calendar();
