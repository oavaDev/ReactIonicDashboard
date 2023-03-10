import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonCard,
  IonItem,
  IonButton,
  IonIcon,
  IonLabel,
  IonInput,
} from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import Employee from './Employee';
import { saveEmployee, searchEmployeeById } from './EmployeeApi';
import './EmployeeList.css';
const EmployeeEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();
  const history = useHistory();
  const [employee, setEmployee] = useState<Employee>({});

  const save = () => {
    saveEmployee(employee);
    history.push('/page/employees');
  };

  const search = async () => {
    if (id === 'new') {
      setEmployee({});
    } else {
      const result = await searchEmployeeById(id);
      setEmployee(result);
    }
  };
  useEffect(() => {
    search();
  }, [history.location.pathname]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name || 'Clientes'} </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonTitle>
            {id === 'new' ? 'Agregar Cliente' : 'Editar cliente'}{' '}
          </IonTitle>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='stacked'>Nombre</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (employee.firstname = String(e.detail.value))
                  }
                  value={employee.firstname}
                  placeholder='Enter your name'
                ></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonLabel position='stacked'>Apellido</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (employee.lastname = String(e.detail.value))
                  }
                  value={employee.lastname}
                  placeholder='Enter your last name'
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='stacked'>Email</IonLabel>
                <IonInput
                  onIonChange={(e) => (employee.email = String(e.detail.value))}
                  value={employee.email}
                  placeholder='Enter your email'
                ></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonLabel position='stacked'>Direcci??n</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (employee.address = String(e.detail.value))
                  }
                  value={employee.address}
                  placeholder='Enter your address'
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='stacked'>Tel??fono</IonLabel>
                <IonInput
                  onIonChange={(e) => (employee.phone = String(e.detail.value))}
                  value={employee.phone}
                  placeholder='Enter your phone number'
                ></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonLabel position='stacked'>Salario</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (employee.salary = Number(e.detail.value))
                  }
                  value={employee.salary}
                  placeholder='Enter your phone number'
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonItem>
            <IonButton onClick={save} color='success' fill='solid' slot='end'>
              <IonIcon icon={checkmark} />
              Guardar
            </IonButton>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default EmployeeEdit;
