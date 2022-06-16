// import React from 'react'
// import './Createuser.css';
// import {CardTitle, CardText, Card,Button, CardImg, CardBody, CardSubtitle, CardLink, Form, Label, Input, FormGroup} from 'reactstrap';
// import Adminheader from './Adminheader';

// function Createuser() {
//   return (
//     <>
//     <Adminheader/>
//     <div>
//       <Card id='user'>
//       <CardBody>
//         <CardTitle><h2>Create User</h2></CardTitle>
//         <br></br>
//         {/* <CardSubtitle><h4>Update Your Daily Report Here!!</h4></CardSubtitle> */}
      
//       <img width="20%" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQSEhUQEBIWFRUSEg8RFRYXGBUXEBcQFxUYFhUXFRUYHiggGBolGxUXIjMiJSotLi8uGB8zODMsNygtLisBCgoKDg0OGhAQGzAjHyUyLS0vLzYrLS8rLS8tLS4tLy0wLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLSstLy0tLf/AABEIAJYBTwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECBAUGAwj/xABKEAABAwECBgwLBwIFBQAAAAABAAIDBBExBQYSIVFhByIzQVJxcnOBkbGyExYyNEJTkqHR0uEUFyNUYqLBgrMkg6PC8BVDY3Ti/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAUBAwQCBgf/xAA7EQABAwAECQoFBAMBAAAAAAABAAIDBBEhMQUSMlJxgaGx0RQVQVFTYZHB4fATIpKi4gYzQvEjYnIW/9oADAMBAAIRAxEAPwCcVblDSFjYV3CXmpe6VEAatlFonxwTjVVd3qleEcJckc0YmNXX01XaipoyhpCZQ0hQvYqWLTzYM/Z6pf8A+gPZfd+KmnKGkJlDSFCmSqZI0I5sGfs9VIw+ey+78VNmUNITKGkKEskaFQtGhHNgz9nquufj2X3fipuyhpCZQ0hQgWjQqZI0I5sGfs9VPPp7P7vxU4ZQ0hMoaQoOyRoVC0aEc2DP2eqnnw9n934qcsoaQmUNIUFlo0KmSNCObRn7PVTz2ez+78VOuUNITKGkKCS0aFQtGgI5tGfs9VPPR7P7vxU75Q0hMoaQoHLRoCoWjQEc2jP2eqnnk9n934qecoaQq2qBMgaAqZA0BRzaM/Z6roYYOZ934qfUUDxTvZ5DnN5JLewrZU2M9Wzyahx1OIcP3Arl2DndDth9VY3CzDlMO/fUpmRRvQbIkjc1RE1w0tJa7qNoPuXW4Ixmp6mwRyWOPoP2r7dAFzuglZJKNLHa4WeK3RUuGWxpt6rit2iIqFoRERCERFqMNYfgpBbM/bEWtY3PI7ibvDWbApa0uNQFZUOcGis3LbrzlkDRlOIaBeSQB1lRdhnZCnktbTtELdOZ8h6TtR1HjXJVlW+V2VK90h0uJcei25bo8HvOWatp961hfT2DIFewe9Smapxso4/KqWGzg2v7gKwX4/0QulceKOT+QFECtWkYPi6SdnBUGnSG4DbxUwjH+h35XD/Lk/gLMgxwon3VLByspneAUJKiDg+LoJ2cF0KbJ0gbeK+hKSqjkGVHI140tcHDrCyF85scWnKaSCLiDY4cRC6LBeO9ZAQDJ4Vo9GXbZtT/ACreMniVD8HOGQ6vTYr200HKCmpFyOAcfaeoIZL+BIc1jyPBk/pku67OldcsL43MNThUtbXtcK2mtERFwuliYV3GXmpe6VEP1UvYV3GXmpe6VEP1TfBuS7UvMfqDLj0O3hFRVXrQ0rpZGxMsynmwW5hbrsTEkAVlIWAuNQvK8Faup8Rp+GzrPwTxGn4bOs/BU8qhzgt/NtL7M7OK5VUK6rxFn4bOs/BU8RJ+GzrPwUcqhzguubqV2Z2cVyxVCup8RJ+GzrPwVDiJPw2dZ+COVQ5wXQwdSsw7OK5VCt5U4o1bBaIsofpc0nqzH3LSzROYcl7S1wvDgQ7qKsZIx+SQVRJFJGfnaRpBHorCrVcVau1AQq0q4q1yF0qFWldXDiLO9rXh8djmhwtJtsItFu1V33f1PDi63fKqOUw5wW0UKkZhXIqi677vqnhw9bvlVDsfVPDi9p3yo5TFnDxXQoVIzCuRKoV0dViVVsziIP5Lm9hsK0VXSviOTKxzDoc0tPRbeu2SNfkkHX7KrfE+PLaRq87l4FUKqUK7XK6nF/HaaAhk5M0V2fdGj9Lj5XEesKSsG4QjqGCWF4c06Lwd8OF4OoqCys/AuGZaSTwkRvsymHyHN0OHYbwsVIoTXitlh2FMqNTnM+V9o2jjrU4otbgTC8dVEJYjqc0+U1++09fvC4vHvGs2upKZ1llrZXg5yeA06NJ6NNquOB734lVR6e5N5KQxjMeusdHesnGvHoMLoKMgvGZ0uYsad8MFzjruGvejiaVz3F73FznG0ucSXE6yb1ahTuGBkQqb6pHLO+U1u9FaUKFZFBQSzuyII3SO0NF3KNzRrKtJqFZXItNQWMrV3NBsbTvFs0rItQBkdxHOAOglbZmxnD6U8h4g0D3grM6mQjpWptElPQowVFJc2xjHZtKh4P6mtcOoWLV1mxpO3PFMyTUQ5jui8e9DaZCf5b11yWUdG5cMVQrPwngeemNk8TmZ7ASLWE6ni1p61gFaAQRWFVaLCqFdPivjpNSERvtlguyCduwf+Nx7pzcV65hbDAWB5KuZsEW/nc70WM33H4b5XMrWOace5WMLg75b1OWCsKRVMYmgeHNObWHb4cLwdSzlgYHwXHTRNhiFjWj+pzt9zjvkrPXnXVVnFu6E4FdVt6xMK7jLzUvdKiH6qXsK7jLzUvdKiH6ptg3JdqXmf1Blx6DvCLZ4redw8o9i1i2eK3ncPKPYt0uQ7QdyTUX9+P8A6bvClZEReaX0BEREIRERCEWFhHB8U7ciZgcN63ygdLTeDxLNRSCQawoc0OFRuUTYzYvupXiwl0Tick74Og6+1aNTHhzB4ngfEby20HQ8Zwev+VDaeUOcys+a8ewvLYRooo8gxcl13dVeNtiqVY+4q8qx9xWsXrAbipuwduUfNx90LKWLg7co+bj7oWUvMG8r3AuRERQpReNRC17S2RrXNN4cAWnjBXsiELiMPYhxvBfSnwbs5yDaYydRvZ7xqCjyspXxPMcrCx7b2m/6jWFPS0eM2AGVcdhsbI0Hwb98HQdIOhb6PTnNOLJaOvpHHeltJwe1/wA0dh6ug8CobXpR0rpZGxRi1z3BrRrOnUL+hKumdG90cgyXMcWuGgjtGtdrsaYNH4lZJmDAWMJuBstkd0CwW6ymc0ojYX++5K6PCZZAzx7qr+GlZ+MNY3BtIylpz+LICMr0hw5DrJzD/wCVGi2OMGFDVVD5zc42MGhg8kdWc6yVriuaPF8Nlt5tOlWUib4j7MkWDR67qlQq0q4rqcRcWvtMhllH4MRGbekkvyeSLz0DSrJJGxtLnLiON0jg1t6riliY6psmntZDe2zNJJxcEa9/e0qT6GhjhYI4WNY0bzRv6TpOsrJGgbyuSKekPmNt3V7vT+GBkQsv6/dyIiKhXIiIhC8pomvaWvaHNIsLXAFpGgg3rgsZtjxrrZaLaOvMRP4Z5BPkHUc3EpCRWRSvjNbSuHxteKnBfPUODJXTCmEbvCl2RkEWODtdtwsz26M6mnFXADKKERt2z3WOkfvufq0NFwH8krZ/ZGeE8NkN8IGlmXYMvIJtycq+y0XLJV9IpbpQBVUOnTwVUNHEZJvKIiLItCxMK7jLzUvdKiH6qXsK7jLzUvdKiH6pvg3JdqXmP1Blx6DvCLZ4redw8o9i1i2eK3ncPKPYt0uQ7QdyTUX9+P8A6bvClZEReaX0BEREIRERCEREQhFCeEhZLIBcJJAOLKKmSsqBHG+V1zGuceIC1Qm95JLjeSSeMm0ppg1uUdA3pHhpwqY3ptO73qVCrH3FXlWlpOYXnMOM3JqL0iNxU24O3KPm4+6FlLygjyWtbwWtb1Cxeq8sbTWvc1VWIiIhCIiIQiIiELgdk3BALG1jBnZZHJrYTtHdBNn9Q0L0w9/gsFxwDM97WMdynbeXo8odIXaVNO2RpjeLWuFhGpR1sp1NssUe8xjn9L3Wdjfet9GeZCyI3Ak+F3husS+lRiISSi9wA8Tbsq1jvXDlChQpwkyvpqd0j2xMFrnuaxvKJsFupTngqgbTwsgZ5LG2W75JzucdZJJ6VG2xnQ+EqTKRmgjJHLftW+7KUrJRhCQlwZ1b/wCk4wdEAwv69w9dyIiJemKIiIQiIiEIiIhCIiIQiIiELEwruMvNS90qIfqpewruMvNS90qIfqm+Dcl2peY/UGXHoO8Itnit53Dyj2LWLNwHUtiqIpHmxrSSTYTmsO8FvkBLHAdR3JLRiBMwm4Fu8KXEWg8cKT1p9h/wVPHGk9afYf8ABee5PLmHwK9vy6jdo36hxXQIuf8AHCk9afYf8E8caT1p9h/wU8nlzD4FTy2jdo36hxXQIue8caT1jvYk+Cp450nrCf6H/BHJ5cw+BRy2jdo36hxXRIuQqcfIAPw2PeddjW9dpPuXM4ZxqnqAWWiNhva28jWbzxXK2OgyuNoqHfwWeXClHYPlOMeocbt57lsseMYRJ/hoXWtBtkcLi4XAaQDnt0gaFxqqqJzFE2JuK1ednpD53l7/AOu5CtvilQeGq4xZa1rjI7ktzi3jNg6VpypCxZpG0VI+rnFjntDiLnBvoN1OJPvGhV0mTEjsvNg0n3uV1Bi+JKCcltp0DjurXaIsejkL42PN7mMcdFpAJWQvPr1oNaIiIQiIiEIiIhCKItkOS2ukHBbG3/TDv9yl1Q3j4f8AHz/5I/0mLfg8f5Do8wl+Ej/iGnyK0BQoUKcJMpJ2K4fwZZN90jWdDWg/7yu6XHbGDbKRx0zyH9jB/C7FIKUa5naV6GiiqFuhERFnWhFrsPVroKeWZgBdGxzgDbkkjTYtitLjj5lUc09dMALwD1hcvyTV3rhfvMqPUxfv+ZU+82o9TF+/5lxKonvJYc0JOKTLnbl233m1HqIv3/Mn3m1PqYf3/MuHKoUclhzQu+US525dx951R6iH9/zJ959T6mH9/wAy4ZEclhzQp5RJnLuRsnVNu4w3jh/MpXXzey8cY7V9IJfTomR4uKKr/JbKLI59eMerzWJhXcZeal7pUQ/VS9hXcZeal7pUQ/VaMG5LtSRfqDLj0HeEVFVUTJIAqKiqrULtUVCqqhQukKoVUq0qF0FRCitJQuq6r1Uqwrb4OxeqJ7CyM5J9M5m8ee/qK6ukwDTUDRPVPD3tzttG1DhwGXk6zx5lnkpLGWXnqF63QUKWUY1WK3rNg9d3etfinivdU1IyWN2zGOzXZ7XW3NF9hv4r9djnjD9pfkRk+BjOb9b7sojRo69/MxlxpfVfhtBjitut2ztBcRd2ca5x9xUQxOMnxZb+gdA9VbSKRG2IwQZPSel3p/VVV83YO3KPm4+6FlLFwduUfNx90LKSE3lepFyIiKFKIiIQiIiEIoQxlny6ud4uMrwOIHJB6mhS9h3CAp6eSY+g05Ot5zMHS4hQeTp/4U0wczKdqSrCbxU1mvy4q0oUKo5M0quUubHMOTQxk+m6V/RlFo9zQuoWlopGUsdLTOzOeGxDlhhe49JFnG4LdLzkpxnl3WSdpXpoW4rA3qAGxERFWrEWlxuaTR1AAJJidYBnPUt0i6acVwKhwrBC+efsknq3+y74Kn2ST1b/AGXfBfQ6Jjzj/rtWHkAzti+d/sknq3+y74Kn2ST1b/Zd8F9Eoo5x/wBdqnkIzti+cHCw2HMRm12qi2WM3ndT/wCxP/cctambTWK1iIqJCMvHGO1fSC+b2XjjHavpBLcI/wAdfkt1D/lq81iYV3GXmpe6VEP1UvYV3GXmpe6VEP1VmDcl2pJf1Blx6DvCLLwPSCaeOJxID3FpIsyrLDdaCsRbPFfzuHlHsW+QkMJHUdyS0dodMxpuJA8SF1/iPTcKTrb8qp4jU3Ck62fKuoRIeVzZxXteb6L2bfBcv4jU3Ck62fKqeItNwpOtnyrqURyubOKnkFG7MeC5bxFpuFL1s+VPESm4UvWz5V1KKeVzZxRyCjdmPBc3DiXStvY5/Ke7+LFtaTBMMeeOJgOmy13tHOs9FU6aR+U4nWVayjwx2sYBqG9FDGHJHOqJS5xcRI9oJJJDQ4gAW7w0KZ1C2GN3m52TvFbsG5TtCWYa/bZpO5YZVj7iryrH3FNhevPm4qbsHblHzcfdCyli4O3KPm4+6FlLzBvK9wLkREUKUREQhERcbjljYIA6CB1sxG2cLox8+revOg2RxukditCrllbE3GcbFpNkfDYkkFLGdrEbZDvGS4N6Bb0nUuLKE/8AN+1Cn8UQiYGDoXm5ZXSvL3f13e9KtK3mJeDvD1cYItaw+FfoyW5wOl2SOtaMqS8XKduDqF9VMPxJGh+Sb7Lo2cZJtOi06FXSZMRlQvNg1+ivosePJWbhadS0myLhcmsYyN1n2YNIOiUkOJ6AG+9SDgLCjaqBk7PSG2HBeMzmniPusKg+eZz3Oe82ue5znHS4m0nrK3mJ+Mho5dtaYZCA9ovB3nNGkb43xxBUT0SuJrW3t29fvUtEFLqlLnXO2dXr4qZkXjT1DZGtkjcHNcAWuGcEHQvZJ05RERCEREQhEREIUA4zeeVPPz/3HLWrZYzeeVPPz/3HLWr0jMkaAkz8o6SjLxxjtX0gvm9l44x2r6QS7CP8dfktlD/lq81iYV3GXmpe6VEP1UvYV3GXmpe6VEP1VmDcl2pJf1Blx6DvCLZ4redw8o9i1i2eK3ncPKPYt0uQ7QdyTUX9+P8A6bvClZEReaX0BEREIRERCEREQhFC2GN3m52TvFTSoWwxu83Oyd4png3KdqSbDP7bNJ3LDKsfcVeVaU1CQEVhTbg7co+bj7oWUoUGF5wLBPIAMwAe6wDVnT/rNR+Yl9t6UnBzq68bYvQDDEdWSfEKa0UJf9ZqPzEvtvVDhef8xL7b0c2uzti652ZmHxCmxzgBaTYBvlaTCONNNDblShzh6LNu63RaMw6SFEU8zn+W5zuUS7tXmu2YObX8zq9nFVvwq4j5W1aTXuq3rrMO48zSgsgHgWG0F1tshHK9Hoz61yJVShW+ONsYqaKkvkmfKa3mtWlChXVYp4oPqCJZrWQX6Hyam6G6+rSCSRsbcZxsUxRukditFquxDxbM8gqJR+DG7ag3PeN7W0G/Xm0rxx9w/wDaZvAsJ8FC5w5UgtDncQzgdOlSrBC1jQxjQ1rQGtAzAAXABcXjvikZSammb+JZa9g9P9Tf1at/jvWRUlr58aSzoHUPfX5JvLRXRwYsek9Z97dKjUq0q4q0pslIW7xcxnlo3WN28RNroyc1u+WH0T7jvhSfgTGanqgBG+x+/G/ayDiHpcYtUJlUKyT0Rkttx6+PsHvWyClPiFV46uHuruX0Sig+gxqq4bAyocQPRfY9tmjbAkDiIW5i2SKoeVHE7+l4PucsLsHyC4g++9MG06M31j33KV0UUSbJVUfJjiH9Lz/vWsrMea2TN4bIGhjWt95BcOtQKBKb6hrUmmx9FfhxUwVtdHC3LmkaxulxAHRbedS4HGPZHFhjoRnu8M8ZhyGG/jd1FR7U1D5HZcj3PdwnEud1leRWuKgMba+3d70rO+ludY2zerppS5xe4kucS5xN5cTaSddqsRFuWZGXjjHavpBQVixi1NWv2gyY2kZcpByBqbwnah02KdUqwg4EtaLxX5JhQ2kAnR5rEwruMvNS90qIfqpewiwmKRoFpdG9oGklpAGdRz4r1fqD7UfzLvB8jGtdjEDSQN6UYchlkfHiNLrDcCekdS062eK3ncPKPYvXxXq/UH2o/mWdgPF6pjqIpHxENa4knKYbBYdBW2SaMsdU4XHpHVpSqjUScTMJjdlN/i7rHcpDREXnl7hEREIRERCEREQhFC2GN3m52TvFTSotwlivVvlkc2AkOke4HKjztJJBznQmGD3ta52MQNJqSnC8b3saGNJtNwJ6O5c4VaVvPFGs/Ln24vmVDijWflz7cXzJn8eLPH1DiknJp8x30u4LSFWFb3xRrPy59uL5lTxQrfy59uL5kfHizx9Q4rrk02Y76XcFolRb7xRrfy59uL5lTxPrfy59uL5kfHizh4jiuhRpsx30u4LQlUK6SHEmsd5UTWcp7CP2krZU2x1Id0na3khzj78lcupMLb3DfurVraHO65h12b6lxBWXg3Bk1Q7Jgjc/eJHkDlOOYKS8HYj0sedwdKf1Ha+y2wHptXSQQtY0NY0NaMwDQA0DUBcskmEWjIFen3wW6LBbj+4atFu30K4/F3EVkRElSRK8WENG5NOu3yzx5tS7VES2SV8hrca02iiZE3FYKkREVasXJY04mx1NssVkcxzk/wDbef1gXHWOm1RjhPBstO/wc8ZYd63yXDS1wzOHEp7WNWUbJWlkrGvad5wBHHn31sgpro7HWjb70rFPQmyHGbYdnvQoAKFSZhbY5ifa6mkMR4LtvHxA25Q965TCGJNZFb+F4QD0mEO/bmd7kzZSon3Oq02em1L30WVl48LfXYudVq96ikkj3SN7LOE1ze0LHyxpC0C25U11WFVVFQuGkL3p6SSTc43v5LXO7Ag2XrsW3LHKoV0dDiVWy3QZA0yEM/b5XuXU4L2MmCx1TMXfojGS3iLznI4gFnfSomXu8LVoZBI64eSjempnyOEcTHPcbmtBLuob2tSBi3scHNJXHX4Fp/uPHY3rXe4MwXDTtyII2xjfsGc63OvcdZWcl8tOe6xlg2+mpbY6I1trrd3qvGngaxoYxoa1osa1oAaBoAFy9kRYFrRERCEREQhEREIRERCEREQhEREIRERCEREQhEREIRERCEREQhEREIRERCEREQhEREIRERCEXg6lY69jTxtBREKUZRxi6Ng4mgfwvdEUkKAUREUIRERCEREQhf/Z" alt="Card image cap" />
      
//         <CardText>
//           <Form id='form'>
//           <FormGroup>
//           <Label for="username">UserName: </Label>
//           <Input type="text" name="username" id="username" placeholder="username" />
//         </FormGroup>
//         <FormGroup>
//           <Label for="password">Password: </Label>
//           <Input type="password" name="password" id="password" placeholder="********" />
//         </FormGroup>
//         <FormGroup>
//           <Label for="user_email">Email:  </Label>
//           <Input type="email" name="email" id="email" placeholder="email address" />
//         </FormGroup>
//         <FormGroup>
//           <Label for="user_role">Role</Label>
//           <Input type="select" name="select" id="role">
//             <option>Admin</option>
//             <option>Associate Software Engineer</option>
//             <option>Managing Director</option>
//             <option>Software Engineer</option>
//             <option>HR</option>
//           </Input>
//         </FormGroup>
//         <Button id='btn'>Create</Button>
//           </Form>
//         </CardText>
        
//       </CardBody>
//     </Card>
//     </div>
//     </>
//   )
// }

// export default Createuser


import React, { Fragment, useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Row, Col, CardBody, Card, CardTitle, CardSubtitle } from 'reactstrap'
import axios from 'axios';
import base_url from '../api/bootapi';
import { useNavigate } from 'react-router-dom';
import Adminheader from './Adminheader';

function Createuser() {

  let navigate = useNavigate();

    const [emp, setEmp] = useState({});
    const handleForm = (e) => {
        console.log(emp);
        postdata(emp);
        e.preventDefault();
    }

    const postdata = (data) => {
        axios.post(`${base_url}/users`, data).then(
            (response) => {
                console.log(response);
                alert("success");
                navigate("/allusers");
            },
            (error) => {
                console.log(error);
            }
        );
    };

    return (
        <>
        <Adminheader/>

        <div style={{marginTop: "80px", marginLeft: "440px"}}>
             <Card id='user'style={{width:"700px"}} >
      <CardBody>       
           <CardTitle><h2 className='text-center'>Create User</h2></CardTitle>       
       <br></br>
            <Fragment>
                <Form onSubmit={handleForm} id= 'form'>
                    <FormGroup>
                        <Label for="name">
                            Name
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                            onChange={(e) => {
                                setEmp({ ...emp, name: e.target.value });
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email" className='mt-2'>
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            onChange={(e) => {
                                setEmp({ ...emp, email: e.target.value });
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="role" className='mt-2'>
                            Role
                        </Label>
                        <Input
                            id="role"
                            name="role"
                            type="select"
                            onChange={(e) => {
                                setEmp({ ...emp, role: e.target.value });
                            }}
                        >
                            <option>
                                Human Resource
                            </option>
                            <option>
                                Mentor
                            </option>
                            <option>
                                Manager
                            </option>
                            <option>
                                Accounts and Finance
                            </option>
                            <option>
                                Production
                            </option>
                            <option>
                            Research and Development
                            </option>
                            <option>
                            Marketing
                            </option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password" className='mt-2'>
                            Password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            type="password"
                            onChange={(e) => {
                                setEmp({ ...emp, password: e.target.value });
                            }}
                        />
                    </FormGroup>


                    <Button type='submit' color='success'>
                        Sign in
                    </Button>
                </Form>
            </Fragment>
            </CardBody>
            </Card>
        </div>
        </>
    )
}

export default Createuser;