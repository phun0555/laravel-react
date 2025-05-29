<?php
class WashingMachine {
    public $state = "IDLE";
    public $coins_inserted = 0;
    public $coins_required = 10;

    public function insert_coin($amount) {
        if ($this->state != "IDLE") {
            echo "ไม่สามารถหยอดเหรียญได้ในขณะนี้<br>";
            return;
        }
        $this->coins_inserted += $amount;
        echo "ใส่เหรียญ: $amount บาท (รวม: $this->coins_inserted บาท)<br>";
        if ($this->coins_inserted >= $this->coins_required) {
            $this->state = "READY";
            echo "ครบจำนวนเหรียญแล้ว พร้อมเริ่มซัก<br>";
        }
    }

    public function start() {
        if ($this->state == "READY") {
            $this->state = "WASHING";
            echo "เริ่มซักผ้า...<br>";
            $this->wash();
        } else {
            echo "ยังไม่พร้อมเริ่มซัก<br>";
        }
    }

    private function wash() {
        echo "...ซักผ้า...<br>";
        $this->state = "RINSING";
        echo "ซักเสร็จ → ล้างน้ำ<br>";
        $this->rinse();
    }

    private function rinse() {
        echo "...ล้างน้ำ...<br>";
        $this->state = "SPINNING";
        echo "ล้างเสร็จ → ปั่นแห้ง<br>";
        $this->spin();
    }

    private function spin() {
        echo "...ปั่นแห้ง...<br>";
        $this->state = "DONE";
        echo "ซักเสร็จแล้ว! กรุณานำผ้าออก<br>";
    }

    public function take_out_clothes() {
        if ($this->state == "DONE") {
            echo "คุณได้นำผ้าออกจากเครื่องแล้ว ขอบคุณค่ะ<br>";
            $this->reset();
        } else {
            echo "ผ้ายังไม่ซักเสร็จ หรือยังไม่เริ่มซัก<br>";
        }
    }

    private function reset() {
        $this->state = "IDLE";
        $this->coins_inserted = 0;
        echo "เครื่องพร้อมสำหรับการใช้งานครั้งถัดไป<br>";
    }
}
?>
