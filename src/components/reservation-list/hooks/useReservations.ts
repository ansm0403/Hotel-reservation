import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getReservations, removeReservation } from '@remote/reservation'
import useUser from '@/hook/auth/useUser'
import { useAlertContext } from '@/contexts/AlertContext'


export default function useReservations() {
  const user = useUser()
  const { open } = useAlertContext();

  const { data, isLoading } = useQuery(
    ['reservations', user?.uid],
    () => getReservations({ userId: user?.uid as string }),
    {
      enabled: user != null,
    },
  )

  const client = useQueryClient();

  const { mutateAsync } = useMutation(
    ({
      hotelId, roomId, reservId
    } : {
      hotelId : string, roomId : string, reservId : string
    }) => removeReservation({hotelId, roomId, reservId}),
    {
      onSuccess : () => {
        // client.invalidateQueries(['reservations', user?.uid]);
        client.removeQueries(['reservations', user?.uid]);
        open({
          title : "예약 취소가 완료되었습니다.",
          onButtonClick : () => {
          }
        })
      }
    }
  )

  return { data, isLoading, deleteReservation : mutateAsync }
}

