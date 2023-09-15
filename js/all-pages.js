let dashboard = `
                       <h3 class="title">لوحة التحكم</h3>
                        <div class="dashboard">
                        <!-- start stats -->
                        <div class="stats">
                            <div class="box">
                                <h3>1,356 <span>المشاهدات اليوميه</span></h3>
                                <i class="fas fa-eye"></i>
                            </div>
                            <div class="box">
                                <h3>1,356 <span>المبيعات</span></h3>
                                <i class="fas fa-cart-shopping"></i>
                            </div>
                            <div class="box">
                                <h3>1,356 <span>التعليقات</span></h3>
                                <i class="fas fa-comments"></i>
                            </div>
                            <div class="box">
                                <h3>1,356 <span>المال</span></h3>
                                <i class="fas fa-money-bill-1"></i>
                            </div>
                        </div>
                        <!-- end stats -->
                        <!-- start chars -->

                        <div class="chars">
                            <div id="pieChart" class="box">
                                <h4>المبيعات</h4>
                            </div>
                            <div id="polarAreaChart" class="box">
                                <h4>دول العملاء</h4>

                            </div>

                        </div>
                        <!-- end chars -->
                        <!-- start orders and customers  -->
                        <div class="orders-and-customers">
                            <div class="orders">
                                <h4>اواخر الطلبات <span>عرض الكل</span></h4>
                                <div class="responsive-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>اسم المنتج</td>
                                                <td>السعر</td>
                                                <td>الدفع</td>
                                                <td>الحالة</td>
                                            </tr>
                                        <tbody>
                                            <tr>
                                                <td>ثلاجة ستار</td>
                                                <td>$1200</td>
                                                <td>تم الدفع</td>
                                                <td class="delivered">تم التسليم</td>
                                            </tr>
                                            <tr>
                                                <td>مكبرات صوت</td>
                                                <td>$110</td>
                                                <td>لم يتم الدفع</td>
                                                <td class="pending">قيد النتظار</td>
                                            </tr>
                                            <tr>
                                                <td>ساعة حائط</td>
                                                <td>$80</td>
                                                <td>تم الدفع</td>
                                                <td class="delivered">تم التسليم</td>
                                            </tr>
                                            <tr>
                                                <td>مكيف جنرال</td>
                                                <td>$1100</td>
                                                <td>لم يتم الدفع</td>
                                                <td class="return">تم ارجاعة</td>
                                            </tr>
                                            <tr>
                                                <td>شاشة سامسونج</td>
                                                <td>$1200</td>
                                                <td>تم الدفع</td>
                                                <td class="in-progress">يعمل علية حاليا</td>
                                            </tr>
                                            <tr>
                                                <td>جالكسي فولد </td>
                                                <td>$110</td>
                                                <td>لم يتم الدفع</td>
                                                <td class="pending">قيد النتظار</td>
                                            </tr>
                                            <tr>
                                                <td>لابتوب اتش بي </td>
                                                <td>$1200</td>
                                                <td>تم الدفع</td>
                                                <td class="delivered">تم التسليم</td>
                                            </tr>
                                            <tr>
                                                <td>ساعة ابل </td>
                                                <td>$110</td>
                                                <td>لم يتم الدفع</td>
                                                <td class="in-progress">يعمل علية حاليا</td>
                                            </tr>
                                            <tr>
                                                <td>جالكسي فولد </td>
                                                <td>$110</td>
                                                <td>لم يتم الدفع</td>
                                                <td class="pending">قيد النتظار</td>
                                            </tr>
                                            <tr>
                                                <td>لابتوب اتش بي </td>
                                                <td>$1200</td>
                                                <td>تم الدفع</td>
                                                <td class="delivered">تم التسليم</td>
                                            </tr>

                                        </tbody>
                                        </thead>
                                    </table>
                                </div>

                            </div>
                    </div>
                </div>
  `;

let customers = ` <div>
                        <h3 class="title">صفحة العملاء</h3>
                        <div class="main-customers">
                        <div class="box">
                            <div class="content">
                                <div class="social">
                                    <i class="fab fa-facebook"></i>
                                    <i class="fab fa-linkedin"></i>
                                    <i class="fab fa-youtube"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                </div>
                                <div class="img">
                                    <img src="./imgs/avatar1.png" alt="">
                                </div>
                            </div>
                            <h5 class="name">سارة عبد السلام</h5>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="social">
                                    <i class="fab fa-facebook"></i>
                                    <i class="fab fa-linkedin"></i>
                                    <i class="fab fa-youtube"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                </div>
                                <div class="img">
                                    <img src="./imgs/avatar2.png" alt="">
                                </div>
                            </div>
                            <h5 class="name">نادر محمود</h5>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="social">
                                    <i class="fab fa-facebook"></i>
                                    <i class="fab fa-linkedin"></i>
                                    <i class="fab fa-youtube"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                </div>
                                <div class="img">
                                    <img src="./imgs/avatar7.png" alt="">
                                </div>
                            </div>
                            <h5 class="name">رياض قاسم</h5>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="social">
                                    <i class="fab fa-facebook"></i>
                                    <i class="fab fa-linkedin"></i>
                                    <i class="fab fa-youtube"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                </div>
                                <div class="img">
                                    <img src="./imgs/avatar8.png" alt="">
                                </div>
                            </div>
                            <h5 class="name">اسامة الكوفي </h5>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="social">
                                    <i class="fab fa-facebook"></i>
                                    <i class="fab fa-linkedin"></i>
                                    <i class="fab fa-youtube"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                </div>
                                <div class="img">
                                    <img src="./imgs/avatar9.png" alt="">
                                </div>
                            </div>
                            <h5 class="name">احمد عيد</h5>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="social">
                                    <i class="fab fa-facebook"></i>
                                    <i class="fab fa-linkedin"></i>
                                    <i class="fab fa-youtube"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                </div>
                                <div class="img">
                                    <img src="./imgs/avatar10.png" alt="">
                                </div>
                            </div>
                            <h5 class="name">ديانا الحداد</h5>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="social">
                                    <i class="fab fa-facebook"></i>
                                    <i class="fab fa-linkedin"></i>
                                    <i class="fab fa-youtube"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                </div>
                                <div class="img">
                                    <img src="./imgs/team-1.jpg" alt="">
                                </div>
                            </div>
                            <h5 class="name">ايفا عادل </h5>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="social">
                                    <i class="fab fa-facebook"></i>
                                    <i class="fab fa-linkedin"></i>
                                    <i class="fab fa-youtube"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                </div>
                                <div class="img">
                                    <img src="./imgs/team-2.jpg" alt="">
                                </div>
                            </div>
                            <h5 class="name">فهد العنزي</h5>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="social">
                                    <i class="fab fa-facebook"></i>
                                    <i class="fab fa-linkedin"></i>
                                    <i class="fab fa-youtube"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                </div>
                                <div class="img">
                                    <img src="./imgs/team-3.jpg" alt="">
                                </div>
                            </div>
                            <h5 class="name">حاتم عبدالله</h5>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="social">
                                    <i class="fab fa-facebook"></i>
                                    <i class="fab fa-linkedin"></i>
                                    <i class="fab fa-youtube"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                </div>
                                <div class="img">
                                    <img src="./imgs/team-4.jpg" alt="">
                                </div>
                            </div>
                            <h5 class="name">خالد الحربي</h5>
                        </div>
                    </div>
                    </div>`;

let messages = ` <div>
                    <h3 class="title">صفحة الرسائل</h3>
                    <div class="main-messages">
                        <div class="box">
                            <div class="content">
                                <div class="img">
                                    <img src="./imgs/team-1.jpg" alt="">
                                </div>
                                <h5>ميادة عبده الماجد</h5>
                            </div>
                            <p>ويبقى لنا في الخيال احلام عالقة سنحققها بأذن الله ونقول : انطوى ما كان ب الامس حلما </p>
                            <div class="stats">
                                <span><i id="heart" class="fas fa-heart"></i>
                                    <span>200</span>
                                </span>
                                <span><i id="comment" class="fas fa-comment"></i> 2k</span>
                                <span><i class="fas fa-eye"></i> 55k</span>
                            </div>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="img">
                                    <img src="./imgs/team-2.jpg" alt="">
                                </div>
                                <h5>وجيه غزال </h5>
                            </div>
                            <p>يعز علي احيانا ان انسى كل ما حدث وأن اركن جميع خيباتي وأتجاهل كل الامي التي حصدتها من
                                جميع البشر على رف النسيان وامضي دون ان اكترث لشيء </p>
                            <div class="stats">
                                <span><i id="heart" class="fas fa-heart"></i>
                                    <span>765</span>
                                </span>
                                <span><i id="comment" class="fas fa-comment"></i> 2k</span>
                                <span><i class="fas fa-eye"></i> 55k</span>
                            </div>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="img">
                                    <img src="./imgs/team-3.jpg" alt="">
                                </div>
                                <h5>سراج بريك</h5>
                            </div>
                            <p>لا اعلم ما الفرق بين القهوة وعينيها كلاهما يعدلا المزاج</p>
                            <div class="stats">
                                <span><i id="heart" class="fas fa-heart"></i>
                                    <span>999</span>
                                </span>
                                <span><i id="comment" class="fas fa-comment"></i> 2k</span>
                                <span><i class="fas fa-eye"></i> 55k</span>
                            </div>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="img">
                                    <img src="./imgs/team-4.jpg" alt="">
                                </div>
                                <h5>حازم رنش</h5>
                            </div>
                            <p>ما بين كل قصيدة ورواية وبين كل فاصلة ونقطة انت البداية والنهاية</p>
                            <div class="stats">
                                <span><i id="heart" class="fas fa-heart"></i>
                                    <span>138</span>
                                </span>
                                <span><i id="comment" class="fas fa-comment"></i> 2k</span>
                                <span><i class="fas fa-eye"></i> 55k</span>
                            </div>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="img">
                                    <img src="./imgs/team-5.jpg" alt="">
                                </div>
                                <h5>لما نوح</h5>
                            </div>
                            <p> التفاؤل هو صديق الدرب وخليل الروح والانسان بدون تفاؤل كا الوردة بلا ماء يأكلها الذبول من
                                عدم الاصرار والعزيمة </p>
                            <div class="stats">
                                <span><i id="heart" class="fas fa-heart"></i>
                                    <span>404</span>
                                </span>
                                <span><i id="comment" class="fas fa-comment"></i> 2k</span>
                                <span><i class="fas fa-eye"></i> 55k</span>
                            </div>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="img">
                                    <img src="./imgs/team-1.jpg" alt="">
                                </div>
                                <h5>ميادة عبده الماجد</h5>
                            </div>
                            <p>ويبقى لنا في الخيال احلام عالقة سنحققها بأذن الله ونقول : انطوى ما كان ب الامس حلما </p>
                            <div class="stats">
                                <span><i id="heart" class="fas fa-heart"></i>
                                    <span>287</span>
                                </span>
                                <span><i id="comment" class="fas fa-comment"></i> 2k</span>
                                <span><i class="fas fa-eye"></i> 55k</span>
                            </div>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="img">
                                    <img src="./imgs/team-2.jpg" alt="">
                                </div>
                                <h5>وجيه غزال </h5>
                            </div>
                            <p>يعز علي احيانا ان انسى كل ما حدث وأن اركن جميع خيباتي وأتجاهل كل الامي التي حصدتها من
                                جميع البشر على رف النسيان وامضي دون ان اكترث لشيء </p>
                            <div class="stats">
                                <span><i id="heart" class="fas fa-heart"></i>
                                    <span>180</span>
                                </span>
                                <span><i id="comment" class="fas fa-comment"></i> 2k</span>
                                <span><i class="fas fa-eye"></i> 55k</span>
                            </div>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="img">
                                    <img src="./imgs/team-3.jpg" alt="">
                                </div>
                                <h5>سراج بريك</h5>
                            </div>
                            <p>لا اعلم ما الفرق بين القهوة وعينيها كلاهما يعدلا المزاج</p>
                            <div class="stats">
                                <span><i id="heart" class="fas fa-heart"></i>
                                    <span>897</span>
                                </span>
                                <span><i id="comment" class="fas fa-comment"></i> 2k</span>
                                <span><i class="fas fa-eye"></i> 55k</span>
                            </div>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="img">
                                    <img src="./imgs/team-4.jpg" alt="">
                                </div>
                                <h5>حازم رنش</h5>
                            </div>
                            <p>ما بين كل قصيدة ورواية وبين كل فاصلة ونقطة انت البداية والنهاية</p>
                            <div class="stats">
                                <span><i id="heart" class="fas fa-heart"></i>
                                    <span>447</span>
                                </span>
                                <span><i id="comment" class="fas fa-comment"></i> 2k</span>
                                <span><i class="fas fa-eye"></i> 55k</span>
                            </div>
                        </div>
                        <div class="box">
                            <div class="content">
                                <div class="img">
                                    <img src="./imgs/team-5.jpg" alt="">
                                </div>
                                <h5>لما نوح</h5>
                            </div>
                            <p> التفاؤل هو صديق الدرب وخليل الروح والانسان بدون تفاؤل كا الوردة بلا ماء يأكلها الذبول من
                                عدم الاصرار والعزيمة </p>
                            <div class="stats">
                                <span><i id="heart" class="fas fa-heart"></i>
                                    <span>1388</span>
                                </span>
                                <span><i id="comment" class="fas fa-comment"></i> 2k</span>
                                <span><i class="fas fa-eye"></i> 55k</span>
                            </div>
                        </div>
                        <div class="overlay"></div>

                        <div class="comments-box">
                            <div class="com"></div>
                            <div class="send-box">
                                <input type="text" aria-placeholder="اكتب تعليقك هنا">
                                <button>ارسال</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    `;

let help = ` <div class="main-help">
                        <div class="container">
                            <h3 class="title">صفحة المساعدة</h3>
                            <div class="content-help">
                                <form action="#">
                                    <div class="right">
                                        <input name="name" type="text" placeholder="اكتب اسمك ">
                                        <input name="subject" type="text" placeholder="عنوان الموضوع">
                                        <input name="email" type="email" placeholder="البريد الاكتروني">
                                    </div>
                                    <div class="left">
                                        <textarea name="message" placeholder="الرسالة"></textarea>
                                        <input name="submit" type="submit" placeholder="ارسال">
                                    </div>
                                </form>
                                <h3 class="title">اسئلة شائعه</h3>
                                <div class="accordion">
                                    <div>
                                        <h4 id="click"><i class="fas fa-angle-down"></i>كيف الطلب من موقعنا</h4>
                                        <div class="content">

                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas porro
                                            exercitationem
                                            tenetur soluta aperiam. Quas, tempore est officia praesentium facere alias
                                            sunt
                                            neque voluptate dicta temporibus Lorem ipsum dolor sit, amet consectetur
                                            adipisicing elit. Libero at, pariatur totam ad nobis sequi fuga veniam
                                            delectus
                                            reiciendis dolorum earum id architecto maxime, itaque repellat eum! Illo
                                            minima
                                            ducimus obcaecati quae quis recusandae optio, incidunt repellat eos natus
                                            nemo
                                            velit perspiciatis! Cupiditate accusamus modi qui enim sapiente libero
                                            nostrum?
                                            Hic, quo labore error ex eligendi libero enim reprehenderit amet soluta
                                            harum
                                            quia quod dignissimos porro voluptatem eveniet vitae laborum facilis ipsum
                                            delectus excepturi aliquid ullam accusantium? Laboriosam cupiditate adipisci
                                            dolorum fugiat delectus quasi impedit, sit error consectetur unde possimus
                                            enim
                                            commodi, cumque ex quaerat pariatur exercitationem iste repudiandae ab quam
                                            odit
                                            ipsa nisi corporis! Non eaque repellendus atque deleniti. Ad, itaque
                                            adipisci
                                            numquam distinctio voluptatem beatae minima consequatur in blanditiis alias
                                            quae
                                            amet nemo saepe esse nulla aut quas dolorem quasi dicta. Neque maiores
                                            similique
                                            ratione fugiat nemo? Earum eaque sapiente neque numquam saepe fugit sit
                                            accusamus aliquam maiores quas expedita amet, necessitatibus exercitationem
                                            reprehenderit tempora ipsa magni asperiores enim! Numquam veniam architecto
                                            labore debitis placeat a? Expedita dolore sit doloremque fugiat nemo,
                                            exercitationem, temporibus deleniti explicabo officiis nam excepturi
                                            corrupti
                                            libero pariatur quibusdam accusamus illo nisi facilis ea sapiente nihil
                                            obcaecati molestias itaque at aspernatur! Temporibus, tempore cupiditate.
                                            omnis
                                            consequuntur repudiandae reprehenderit.

                                        </div>
                                    </div>
                                    <div>
                                        <h4 id="click"><i class="fas fa-angle-down"></i>كيف الطلب من موقعنا</h4>
                                        <div class="content">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas porro
                                            exercitationem
                                            tenetur soluta aperiam. Quas, tempore est officia praesentium facere alias
                                            sunt
                                            neque voluptate dicta temporibus omnis consequuntur repudiandae
                                            reprehenderit.
                                        </div>
                                    </div>
                                    <div>
                                        <h4 id="click"><i class="fas fa-angle-down"></i>كيف الطلب من موقعنا</h4>
                                        <div class="content">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas porro
                                            exercitationem
                                            tenetur soluta aperiam. Quas, tempore est officia praesentium facere alias
                                            sunt
                                            neque voluptate dicta temporibus omnis consequuntur repudiandae
                                            reprehenderit.
                                        </div>
                                    </div>
                                    <div>
                                        <h4 id="click"><i class="fas fa-angle-down"></i>كيف الطلب من موقعنا</h4>
                                        <div class="content">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas porro
                                            exerc Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odit
                                            suscipit iusto enim expedita inventore voluptate porro, optio possimus ex.
                                            Tempora corporis adipisci voluptas repellat magni esse eaque magnam eius?
                                            itationem
                                            tenetur soluta aperiam. Quas, tempore est officia praesentium facere alias
                                            sunt
                                            neque voluptate dicta temporibus omnis consequuntur repudiandae
                                            reprehenderit.
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>`;

let settings = ` <div class="main-settings">
    <h3 class = "title">الاعدادات</h3>
                        <div class="main-settings-content">
                            <div class="right">
                                <img id="profileImg" src="./imgs/admin.png" alt="">
                                <h3 id="setFulName">عبد الملك عبد الله</h3>
                                <h5 id="setJop">مبرمج واجهات امامية</h5>
                                <div class="social">
                                    <i class="fab fa-facebook"></i>
                                    <i class="fab fa-linkedin"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-youtube"></i>
                                </div>
                            </div>
                            <div class="left">
                                <div class="titles">
                                    <span data-content="profileD" class="active">نظرة عامة</span>
                                    <span data-content="edit-profile">تعديل الملف الشخصي</span>
                                    <span data-content="settings-content">الاعدادات</span>
                                </div>
                                <div class="content">
                                    <div class="profileD">
                                        <div class="about">
                                         عبد الملك عبد الله عمري 20 عام مبرمج واجهات امامية 
                                        </div>
                                        <h3 class="title-profile">تفاصيل الملف الشخصي</h3>
                                        <ul>
                                            <li>الاسم الكامل :<span id="full-name">عبد الملك عبد الله</span></li>
                                            <li> الشركة :<span id="company"> لايوجد حاليا</span></li>
                                            <li> الوظيفة :<span id="jop">مبرمج واجهات امامية</span></li>
                                            <li> الدولة :<span id="country"> اليمن</span></li>
                                            <li> العنوان :<span id="address"> اليمن / الحديدة </span></li>
                                            <li> رقم الهاتف :<span id="number">+967717432183</span></li>
                                            <li> البريد :<span id="email">Email@gmail.com</span></li>
                                        </ul>
                                    </div>
                                    <div class="edit-profile">
                                        <div class="profile-img">
                                            <h5>صورة الملف الشخصي</h5>
                                            <div class="img">
                                                <img id="profileImg" src="./imgs/admin.png" alt="">
                                                <div class="control">
                                                    <i id="upload" class="fas fa-upload"></i>
                                                    <i id="remove" class="fas fa-trash"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box">
                                            <h5>الاسم الكامل</h5>
                                            <input type="text" placeholder="الاسم الكامل " name="full-name">
                                        </div>
                                        <div class="box">
                                            <h5> الشركة</h5>
                                            <input type="text" placeholder="الشركة" name="company">
                                        </div>
                                        <div class="box">
                                            <h5>الوظيفة</h5>
                                            <input type="text" placeholder="الوظيفة" name="jop">
                                        </div>
                                        <div class="box">
                                            <h5>الدولة</h5>
                                            <input type="text" placeholder="الدولة" name="country">
                                        </div>
                                        <div class="box">
                                            <h5> العنوان</h5>
                                            <input type="text" placeholder="العنوان" name="address">
                                        </div>
                                        <div class="box">
                                            <h5> رقم الهاتف</h5>
                                            <input type="text" placeholder="رقم الهاتف" name="number">
                                        </div>
                                        <div class="box">
                                            <h5>البريد</h5>
                                            <input type="text" placeholder=" البريد" name="email">
                                        </div>
                                        <div class="box">
                                            <h5>الوصف</h5>
                                            <input type="text" placeholder="الوصف" name="descriptions">
                                        </div>
                                        <button id="changeButton">تغير المعلومات </button>
                                        <div class="overlay">
                                            <input id="inputFile" type="file" placeholder="اختر ملف">
                                        </div>
                                    </div>
                                    <div class="settings-content">
                                        <div class="color-content">
                                            <h3>اختر لون الموقع</h3>
                                            <div class="color-box">
                                                <li data-color="#5c81df" class="active"></li>
                                                <li data-color="#4fc3f7"></li>
                                                <li data-color="#ab47bc"></li>
                                                <li data-color="#ff7043"></li>
                                                <li data-color="#4caf50"></li>
                                                <li data-color="#009688"></li>
                                            </div>
                                        </div>

                                        <div class="toggles">
                                            <div class="box">
                                                <label>اظهار صندوق البحث</label>
                                                <div data-toggle="search" class="toggle">
                                                    <i class="fas fa-circle-check"></i>
                                                </div>
                                            </div>
                                            <div class="box">
                                                <label>اظهار الشعار</label>
                                                <div data-toggle="hide-logo" class="toggle">
                                                    <i class="fas fa-circle-check"></i>
                                                </div>
                                            </div>
                                            <div class="box">
                                                <label>لا شيء هنا مجرد اختبار</label>
                                                <div class="toggle">
                                                    <i class="fas fa-circle-check"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;

let password = `   <div class="password-page">
                        <div class="main-password">
                            <div class="content">
                                <h4>تغيير كلمة السر</h4>
                                <div class="box current-password">
                                    <input type="text">
                                    <span>كلمة المرور الحالية</span>
                                </div>
                                <div class="box new-password">
                                    <input type="text">
                                    <span>كلمة السر الجديده</span>
                                </div>
                                <div class="box new-password-again">
                                    <input type="text">
                                    <span>اعد كتابة كلمة السر </span>
                                </div>
                                <button class="changed">تغيير</button>
                            </div>
                        </div>
                    </div>`;

let signOut = `  <div class="main-sin-out">
                        <div class="sin-out">
                            <div class="content">
                                <h4>تسجيل الخروج</h4>
                                <div class="box email">
                                    <input type="email" placeholder="البريد الاكتروني">
                                    <i class="fas fa-circle-check"></i>
                                </div>
                                <div class="box password">
                                    <input type="password" placeholder="كلمة السر">
                                    <i class="fas fa-eye" id="show-password"></i>
                                </div>
                                <button class="sinOutButton">تسجل الخروج</button>
                            </div>
                        </div>
                    </div>`;

export { dashboard, customers, messages, help, settings, password, signOut };
