package 50.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 50.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Здание
 */
@Entity(name = "IIS50Здание")
@Table(schema = "public", name = "Здание")
public class Zdanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Долгота")
    private Double долгота;

    @Column(name = "ГородID")
    private Integer городid;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "Широта")
    private Double широта;

    @Column(name = "Название")
    private String название;

    @Column(name = "IDИдентификатор")
    private Integer idидентификатор;


    public Zdanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getДолгота() {
      return долгота;
    }

    public void setДолгота(Double долгота) {
      this.долгота = долгота;
    }

    public Integer getГородID() {
      return городid;
    }

    public void setГородID(Integer городid) {
      this.городid = городid;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public Double getШирота() {
      return широта;
    }

    public void setШирота(Double широта) {
      this.широта = широта;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }

    public Integer getIDИдентификатор() {
      return idидентификатор;
    }

    public void setIDИдентификатор(Integer idидентификатор) {
      this.idидентификатор = idидентификатор;
    }


}